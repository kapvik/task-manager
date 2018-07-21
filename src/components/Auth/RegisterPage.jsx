import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { register } from '../../actions'
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
  formLogin: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  btn: {
    color: '#fff',
    backgroundColor: '#3f51b5',
    '&:hover': {
      backgroundColor: '#2c387e'
    }
  }
})

class RegisterPage extends Component {
  constructor() {
    super()
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleSubmitForm(user) {
    this.props.reg(user)
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
      <form
        onSubmit={handleSubmit(this.handleSubmitForm)}
        className={classes.formLogin}>
        <Field
          label='Username'
          name='user[login]'
          component={this.renderField}
          type='text'
        />
        <Field
          label='Email'
          name='user[email]'
          component={this.renderField}
          type='email'
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
                    Register
          </Button>
        </div>
      </form>)
  }
}

const mapStateToProps = state => ({
  user: state.dataUser,
  auth: state.regitering
})

const mapDispatchToProps = dispatch => ({
  reg: (user) => dispatch(register(user))
})


export default compose(
  withStyles(styles),
  reduxForm({
    form: 'register'
  }),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(RegisterPage)
