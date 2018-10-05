// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { QueryRenderer, graphql } from 'react-relay';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import environment from '../environment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userInfo: null};
    Auth.currentUserInfo().then(info => {
      this.setState({userInfo: info});
    })
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" style={{flex: 1}}>
              Todo List
            </Typography>
            <Typography variant="subheading" style={{margin: "0 10px"}}>
              Logged in as {this.state.userInfo && this.state.userInfo.username}.
            </Typography>
            <Button onClick={() => {
              Auth.signOut().then(() => location.reload());
            }}>
              Sign Out
            </Button>
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

export default withAuthenticator(App);
