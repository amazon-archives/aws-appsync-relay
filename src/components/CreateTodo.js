import React from 'react';
import {graphql, commitMutation} from 'react-relay';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';


export default class CreateTodo extends React.Component {
  render() {
    return (
      <Grid container style={{padding: '30px 30px 0 30px'}} spacing={32}>
        <Grid item xs={10}>
          <FormControl fullWidth>
            <InputLabel htmlFor="create-todo">New Todo</InputLabel>
            <Input
              id="create-todo"
              />
          </FormControl>
        </Grid>
        <Grid item xs={2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button color="secondary" variant="contained" size="small">Add <AddIcon/></Button>
        </Grid>
      </Grid>);
  }
}
