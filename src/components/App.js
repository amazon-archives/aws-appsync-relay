import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import environment from '../environment';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Todo List
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Paper style={{flex: '1', maxWidth: '800px', marginTop: '100px'}}>
              <QueryRenderer
                environment={environment}
                variables={{count: 5}}
                query={graphql`
                       query AppQuery($count: Int) {
                         viewer {
                           id
                           ...CreateTodo_viewer
                           ...TodoList_viewer @arguments(count: $count)
                         }
                       }`}
                render={({error, props}) => {
                  let viewer = props && props.viewer;
                  return (<React.Fragment>
                            <CreateTodo viewer={viewer} />
                            <TodoList viewer={viewer} error={error} />
                          </React.Fragment>);}} />
          </Paper>
        </div>
      </React.Fragment>);
  }
}
