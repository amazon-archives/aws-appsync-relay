// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import {graphql, commitMutation, createFragmentContainer} from 'react-relay';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Clear from '@material-ui/icons/Clear';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const updateMutation = graphql`
  mutation TodoUpdateMutation(
    $input: UpdateTodoInput!
  ) {
    updateTodo(input: $input) {
      node {
        complete
      }
      userId
    }
  }
`;


function updateTodo(env, todo, complete) {
  const variables = {
    input: {
      id: todo.id,
      complete
    },
  };
  commitMutation(
    env,
    {
      mutation: updateMutation,
      variables,
      onCompleted: resp => console.log('Update response:', resp),
      onError: err => console.error('Update error:', err),
      optimisticResponse: {
        updateTodo: {
          node: {
            id: todo.id,
            complete
          }
        }
      }
    }
  );
}


const deleteMutation = graphql`
  mutation TodoDeleteMutation(
    $input: DeleteTodoInput!
  ) {
    deleteTodo(input: $input) {
      deletedId
      userId
    }
  }
`;


function deleteTodo(env, viewerId, todo) {
  const variables = {
    input: {
      id: todo.id,
    },
  };
  commitMutation(
    env,
    {
      mutation: deleteMutation,
      variables,
      onCompleted: resp => console.log('Delete response:', resp),
      onError: err => console.error('Delete error:', err),
      optimisticResponse: {
        deleteTodo: {
          deletedId: todo.id
        }
      },
      configs: [{
        type: 'RANGE_DELETE',
        parentID: viewerId,
        connectionKeys: [{key: 'TodoList_listTodos'}],
        pathToConnection: ['viewer', 'edges'],
        deletedIDFieldName: 'deletedId',
      }]
    }
  );
}


class Todo extends React.Component {
  onChange(event) {
    updateTodo(this.props.relay.environment, this.props.todo, event.target.checked);
  }

  onDelete(event) {
    deleteTodo(this.props.relay.environment, this.props.viewer.id, this.props.todo);
  }

  render() {
    let complete = this.props.todo.complete;
    return (<ListItem>
              <Checkbox
                checked={complete}
                onChange={this.onChange.bind(this)} />
              <ListItemText
                primaryTypographyProps={{style: complete ? {textDecoration: 'line-through', color: '#aaa'} : {}}}>
                {this.props.todo.text}
              </ListItemText>
              <IconButton onClick={this.onDelete.bind(this)}>
                <Clear style={{color: '#666'}}/>
              </IconButton>
            </ListItem>);
  }
}


export default createFragmentContainer(
  Todo,
  {
    todo: graphql`
    fragment Todo_todo on Todo {
      id
      complete
      text
    }`,
    // Need a reference to viewer to get the parentId for deletion
    viewer: graphql`
    fragment Todo_viewer on Viewer {
      id
    }`
  }
);
