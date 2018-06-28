import {graphql, commitMutation} from 'react-relay';

const createMutation = graphql`
  mutation CreateTodoMutation(
    $input: CreateTodoInput!
  ) {
    createTodo(input: $input) {
      node {
        complete
        text
      }
    }
  }
`;

function createTodo(env, text) {
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
      onCompleted: (response, errors) => {
        console.log('Response received from server.');
      },
      onError: err => {
        alert('Error', 'Unable to connect to network.');
      }
    }
  );
}

export {createTodo};
