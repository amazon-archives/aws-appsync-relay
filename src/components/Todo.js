import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {updateTodo} from '../mutations/UpdateTodo';


class Todo extends React.Component {
  onChange(event) {
    updateTodo(this.props.relay.environment, this.props.todo.id, event.target.checked);
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
`
);
