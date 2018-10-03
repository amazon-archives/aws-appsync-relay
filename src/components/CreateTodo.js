import React from 'react';
import {graphql, commitMutation, createFragmentContainer, requestSubscription} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';


// The default `RANGE_ADD` updater almost works,
// but it would create duplicate entries for
// local creations and corresponding subscription updates.
// See also https://github.com/facebook/relay/issues/2023
function makeUpdater(viewer, rootField) {
  return (store) => {
    let serverEdge = store.getRootField(rootField).getLinkedRecord('edge');
    let getEdgeId = (edge) => edge.getLinkedRecord('node').getValue('id');
    // Check if the todo is already in the list
    // (Checking with `store.get` is insufficient, because the new record is already in the store)
    let newId = getEdgeId(serverEdge);
    let viewerProxy = store.get(viewer.id);
    let conn = ConnectionHandler.getConnection(viewerProxy, 'TodoList_listTodos');
    if (!conn.getLinkedRecords('edges').filter((edge) => getEdgeId(edge) === newId).length) {
      // Only add the new edge if it's not there yet
      // Need to make a new edge record because passing the one from the payload directly
      // can cause duplicate references to the same record in the store
      let newEdge = ConnectionHandler.createEdge(store, conn, serverEdge.getLinkedRecord('node'), 'TodoEdge');
      ConnectionHandler.insertEdgeBefore(conn, newEdge);
    }
  };
}


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
      userId
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
  let updater = makeUpdater(viewer, 'createTodo');
  commitMutation(
    env,
    {
      mutation: createMutation,
      variables,
      onCompleted: resp => console.log('Creation response:', resp),
      onError: err => console.error('Creation error:', err),
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
      updater,
      optimisticUpdater: updater
    }
  );
}


const createSubscription = graphql`
  subscription CreateTodoSubscription($user: ID!) {
    createdTodo(userId: $user)  {
      edge {
        node {
          text
          complete
        }
      }
    }
  }
`;


function subscribeToCreates(env, viewer) {
  return requestSubscription(env,
                             {
                               subscription: createSubscription,
                               variables: {user: viewer.id},
                               onCompleted: () => console.log('Create subscription closed.'),
                               onError: err => console.error('Error subscribing to todo updates:', err),
                               onNext: resp => console.log('Create event:', resp),
                               updater: makeUpdater(viewer, 'createdTodo')
                             });
}


class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newTodo: ''};
    this.subscription = null;
  }

  componentDidUpdate() {
    if (this.props && !this.subscription) {
      this.subscription = subscribeToCreates(this.props.relay.environment, this.props.viewer);
    }
  }

  onChange(event) {
    this.setState({newTodo: event.target.value});
  }

  onSubmit(event) {
    // returning false doesn't work in React's onSubmit
    event.preventDefault();
    if (this.state.newTodo) {
      createTodo(this.props.relay.environment, this.props.viewer, this.state.newTodo);
      this.setState({newTodo: ''});
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <Grid container style={{padding: '30px 30px 0 30px'}} spacing={32}>
          <Grid item xs={10}>
            <FormControl fullWidth onSubmit={console.log}>
              <InputLabel htmlFor="create-todo">New Todo</InputLabel>
              <Input
                id="create-todo"
                value={this.state.newTodo}
                onChange={this.onChange.bind(this)}
                autoComplete="off"
                />
            </FormControl>
          </Grid>
          <Grid item xs={2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button color="secondary" variant="contained" size="small" type="submit">Add <AddIcon/></Button>
          </Grid>
        </Grid>
      </form>);
  }
}


export default createFragmentContainer(
  CreateTodo,
  graphql`
  fragment CreateTodo_viewer on Viewer {
    id
  }
`);
