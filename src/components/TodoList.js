import React from 'react';
import {graphql, createPaginationContainer} from 'react-relay';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';


class TodoList extends React.Component {
  render() {
    let edges = this.props.viewer.listTodos.edges;
    if (false) {
    return (<List>
              {edges.map((todo) => (
                <ListItem key={todo.node.id}>
                  <Checkbox/>
                  <ListItemText>{todo.node.text}</ListItemText>
                </ListItem>))}
            </List>);
    } else {
      return <Typography align="center" style={{margin: '20px'}}>You don't have anything to do!</Typography>;
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
            text
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
