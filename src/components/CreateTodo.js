import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';


export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newTodo: ''};
  }

  onChange(event) {
    this.setState({newTodo: event.target.value});
  }

  onSubmit(event) {
    if (this.state.newTodo) {
      this.props.onAdd(this.state.newTodo);
      this.setState({newTodo: ''});
    }
    // `return false` doesn't work in React
    event.preventDefault();
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
