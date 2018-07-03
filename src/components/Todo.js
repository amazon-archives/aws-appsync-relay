import React from 'react';
import {graphql, commitMutation, createFragmentContainer} from 'react-relay';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const updateMutation = graphql`
  mutation TodoMutation(
    $input: UpdateTodoInput!
  ) {
    updateTodo(input: $input) {
      node {
        complete
      }
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


class Todo extends React.Component {
  onChange(event) {
    updateTodo(this.props.relay.environment, this.props.todo, event.target.checked);
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
            </ListItem>);
  }
}


export default createFragmentContainer(
  Todo,
  graphql`
  fragment Todo_todo on Todo {
    id
    complete
    text
  }
`);
