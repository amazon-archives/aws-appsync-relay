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
function createTodo(env, viewerId, text) {
  const variables = {
    input: {
      text,
      complete: false
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
        parentID: viewerId,
        connectionInfo: [{
          key: 'TodoList_listTodos',
          rangeBehavior: 'prepend',
        }],
        edgeName: 'edge',
      }]}
  );
}

export {createTodo};
