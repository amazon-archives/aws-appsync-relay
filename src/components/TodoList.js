import React from 'react';
import {graphql, createPaginationContainer} from 'react-relay';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Todo from './Todo';


class TodoList extends React.Component {
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
      return (<List>
              {edges.map((edge) => <Todo key={edge.node.id} todo={edge.node}/>)}
              </List>);
    }
  }
}

export default createPaginationContainer(
  TodoList,
  graphql`
    fragment TodoList_viewer on Viewer
    @argumentDefinitions(
        count: {type: "Int"}
        cursor: {type: "String"}
    ) {
      listTodos(first: $count after: $cursor) @connection(key: "TodoList_listTodos") {
        edges {
          node {
            id
            ...Todo_todo
          }
        }
      }
    }
  `,
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
      }
    `
  }
);
