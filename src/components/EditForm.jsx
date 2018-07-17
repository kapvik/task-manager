import React, { Component } from 'react'

import { connect } from 'react-redux'
import { stopEditingUser, cancelEditingUser } from '../actions'

import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

class EditForm extends Component {
  constructor() {
    super()
    this.state = {
      first: '',
      last: '',
      email: '',
      date: ''
    }
  }

  onClickSubmit() {
    this.props.submit(this.state)
  }

  onClickCancel() {
    this.props.cancel()
  }

  render() {
    return (
      <Grid container spacing={16} justify='center'>
        <div>
          <Grid item md={3} >
            <FormControl >
              <InputLabel htmlFor='name-simple'>Name </InputLabel>
              <Input
                id='name-simple'
                name='first'
                onChange={e => this.setState({ first: e.target.value })}/>
            </FormControl>
          </Grid>
          <Grid item md={3} >
            <FormControl >
              <InputLabel htmlFor='name-simple'>Lastname </InputLabel>
              <Input
                id='name-simple'
                name='last'
                onChange={e => this.setState({ last: e.target.value })}/>
            </FormControl>
          </Grid>
          <Grid item md={3} >
            <FormControl >
              <InputLabel htmlFor='email-simple'>Email</InputLabel>
              <Input
                id='email-simple'
                name='email'
                onChange={e => this.setState({ email: e.target.value })}/>
            </FormControl>
          </Grid>
          <Grid item md={3} >
            <FormControl >
              <InputLabel htmlFor='dob-simple'>Date of birth</InputLabel>
              <Input
                id='dob-simple'
                name='dob'
                onChange={e => this.setState({ date: e.target.value })}/>
            </FormControl>
          </Grid>
          <Grid container justify='center' >
            <Grid item md={6} >
              <Button variant='outlined' onClick={ () => this.onClickSubmit() }>
                    Submit
              </Button>
            </Grid>
            <Grid item md={6} >
              <Button variant='outlined' onClick={ () => this.onClickCancel() }>
                    Cancel
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  user: state.dataUser,
  isEdit: state.editing
})

const mapDispatchToProps = dispatch => ({
  cancel: () => dispatch(cancelEditingUser()),
  submit: (newData) => dispatch(stopEditingUser(newData))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)