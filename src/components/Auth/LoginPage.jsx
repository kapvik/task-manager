import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'

import compose from 'recompose/compose'
import { connect } from 'react-redux'

import { login } from '../../actions'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const styles = () => ({
  btnGroup: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  btn: {
    color: '#fff',
    backgroundColor: '#3f51b5',
    '&:hover': {
      backgroundColor: '#2c387e'
    }
  }
})

class LoginPage extends Component {
  constructor(props) {
    super(props)
    
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleSubmitForm(user) {
    this.props.submit(user).then(() =>
      this.props.history.push('/'))
  }

  renderField({ input, label, type }) {
    return (
      <Grid item md={3} >
        <FormControl required>
          <InputLabel>{label}</InputLabel>
          <Input
            {...input} type={type}
          />
        </FormControl>
      </Grid>)
  }

  render() {
  	const { handleSubmit, classes } = this.props

    return (
      <div className={classes.formStyle}>
      <form
        onSubmit={handleSubmit(this.handleSubmitForm)}
      >
        <Field
          label='Username or email'
          name='user[login]'
          component={this.renderField}
          type='text'
        />
        <Field
          label='Password'
          name='user[password]'
          component={this.renderField}
          type='password'
        />
        <div className={ classes.btnGroup }>
          <Button
            variant='outlined'
            type='submit'
            className={classes.btn}>
                   Log in
          </Button>
        </div>
      </form>
      </div>)
  }
}

const mapStateToProps = state => ({
  user: state.dataUser,
  auth: state.authentication
})

const mapDispatchToProps = dispatch => ({
  submit: (user) => dispatch(login(user))
})


export default compose(
  withStyles(styles),
  reduxForm({
    form: 'login'
  }),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginPage)
