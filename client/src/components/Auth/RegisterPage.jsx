import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Actions
import { register } from '../../actions'

// Own components
import CustomImput from '../CustomInput'

// Own styles
import styles from './auth.styles'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

class RegisterPage extends Component {
  constructor() {
    super()
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleSubmitForm(user) {
    this.props.reg(user).then(() =>
      this.props.history.push('/'))
  }

  render() {
  	const { handleSubmit, pristine, submitting, classes } = this.props
    return (
      <div className={classes.formStyle}>
        <form
          onSubmit={handleSubmit(this.handleSubmitForm)}
          className={classes.formBlock}
        >
          <Field
            label='Username'
            name='username'
            component={CustomImput}
            type='text'
          />
          <Field
            label='Email'
            name='email'
            component={CustomImput}
            type='email'
          />
          <Field
            label='Password'
            name='password'
            component={CustomImput}
            type='password'
          />
          <div className={ classes.btnGroup }>
            <Button
              variant='outlined'
              type='submit'
              disabled={pristine || submitting}
              className={classes.btn}>
                    Register
            </Button>
          </div>
        </form>
      </div>)
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
