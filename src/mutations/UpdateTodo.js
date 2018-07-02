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

function updateTodo(env, id, complete) {
  const variables = {
    input: {
      id,
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
            id,
            complete
          }
        }
      }
    }
  );
}

export {updateTodo};
