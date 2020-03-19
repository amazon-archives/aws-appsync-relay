// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import {graphql, createPaginationContainer, requestSubscription} from 'react-relay';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Todo from './Todo';


const updateSubscription = graphql`
  subscription TodoListUpdateSubscription($user: ID!) {
    updatedTodo(userId: $user) {
      node {
        complete
      }
    }
  }
`;

const deleteSubscription = graphql`
  subscription TodoListDeleteSubscription($user: ID!) {
    deletedTodo(userId: $user)  {
      deletedId
    }
  }
`;


function subscribeToDeletes(env, viewer) {
  return requestSubscription(env,
                             {
                               subscription: deleteSubscription,
                               variables: {user: viewer.id},
                               onCompleted: () => console.log('Delete subscription closed.'),
                               onError: err => console.error('Error subscribing to todo deletes:', err),
                               onNext: resp => console.log('Delete event:', resp),
                               configs: [{
                                 type: 'RANGE_DELETE',
                                 parentID: viewer.id,
                                 connectionKeys: [{key: 'TodoList_listTodos'}],
                                 pathToConnection: ['viewer', 'edges'],
                                 deletedIDFieldName: 'deletedId',
                               }]
                             });
}


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.subscription = false;
  }

  componentDidUpdate() {
    if (this.props && !this.subscription) {
      this.subscription = requestSubscription(this.props.relay.environment,
                          {
                            subscription: updateSubscription,
                            variables: {user: this.props.viewer.id},
                            onCompleted: () => console.log('Update subscription closed.'),
                            onNext: resp => console.log('Update event:', resp),
                            onError: err => console.error('Error subscribing to todo updates:', err)
                          });
      subscribeToDeletes(this.props.relay.environment, this.props.viewer);
    }
  }

  loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(
      5,
      (error = null) => {
        if (error) {
          console.error('Network Error', 'Unable to connect to the network.');
        }
      },
    );
  }


  render() {
    let TodoStatus = (props) => {
      return (<div style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
              {props.loading && <CircularProgress/>}
              {props.text && <Typography align="center" style={props.error && {color: 'red'}}>{props.text}</Typography>}
              </div>);
    };
    if (this.props.error) {
      return <TodoStatus error text="There was an error loading Todos from the server."/>;
    }
    let viewer = this.props.viewer;
    if (!viewer) {
      return <TodoStatus loading />;
    }
    let edges = viewer.listTodos.edges;
    if (edges.length === 0) {
      return <TodoStatus text="You don't have anything to do!"/>;
    } else {
      return (<React.Fragment>
                <List>
                  {edges.map((edge) => <Todo key={edge.node.id} todo={edge.node} viewer={viewer}/>)}
                </List>
                {this.props.relay.hasMore() &&
                  <div style={{display: 'flex', justifyContent: 'center', padding: '0 20px 20px 20px'}}>
                    <Button color="secondary" onClick={this.loadMore.bind(this)}>Load More</Button>
                  </div>}
              </React.Fragment>);
    }
  }
}

export default createPaginationContainer(
  TodoList,
  {
    viewer: graphql`
    fragment TodoList_viewer on Viewer
    @argumentDefinitions(
        count: {type: "Int"}
        cursor: {type: "String"}
    ) {
      id
      ...Todo_viewer
      listTodos(first: $count after: $cursor) @connection(key: "TodoList_listTodos") {
        edges {
          node {
            id
            ...Todo_todo
          }
        }
      }
    }`
  },
  {
    direction: 'forward',
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        count,
        cursor
      };
    },
    query: graphql`
      query TodoListPaginationQuery(
        $count: Int!
        $cursor: String
      ) {
          viewer {
            ...TodoList_viewer @arguments(count: $count, cursor: $cursor)
          }
      }`
  }
);
