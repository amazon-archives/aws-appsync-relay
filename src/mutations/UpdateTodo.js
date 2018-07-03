import {graphql, commitMutation} from 'react-relay';

const updateMutation = graphql`
  mutation UpdateTodoMutation(
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
      onError: err => {
        alert('Unable to connect to network.');
      },
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

export {updateTodo};
