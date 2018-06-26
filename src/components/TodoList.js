import React from 'react';
import {graphql, createPaginationContainer} from 'react-relay';


class TodoList extends React.Component {
    render() {
      return (this.props.viewer.listTodos.edges.map((todo) => <p>{todo.node.text}</p>));
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
