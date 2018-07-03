import {graphql, commitMutation} from 'react-relay';

const createMutation = graphql`
  mutation CreateTodoMutation(
    $input: CreateTodoInput!
  ) {
    createTodo(input: $input) {
      edge {
        node {
          complete
          text
        }
      }
    }
  }
`;

var tempId = 0;
function createTodo(env, viewer, text) {
  const variables = {
    input: {
      text
    },
  };
  commitMutation(
    env,
    {
      mutation: createMutation,
      variables,
      onError: err => {
        alert('Unable to connect to network.');
      },
      optimisticResponse: {
        createTodo: {
          edge: {
            node: {
              id: 'Todo' + tempId++,
              complete: false,
              text: text
            }
          }
        }
      },
      configs: [{
        type: 'RANGE_ADD',
        parentID: viewer.id,
        connectionInfo: [{
          key: 'TodoList_listTodos',
          rangeBehavior: 'prepend',
        }],
        edgeName: 'edge',
      }]
    }
  );
}

export {createTodo};
