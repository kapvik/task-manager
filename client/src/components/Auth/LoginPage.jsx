import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'

import compose from 'recompose/compose'
import { connect } from 'react-redux'

// Actions
import { login } from '../../actions'

// Custom validations
import { loginValidation } from '../../utils/validation'

// Own components
import CustomImput from '../CustomInput'

// Own styles
import styles from './auth.styles'


// Material ui components
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleSubmitForm(user) {
    this.props.submit(user).then(() =>
      this.props.history.push('/'))
  }

  render() {
  	const { handleSubmit, classes } = this.props

    return (
      <div className={classes.formStyle}>
        <form
          onSubmit={handleSubmit(this.handleSubmitForm)}
          className={classes.formBlock}
        >
          <Field
            label='Email'
            name='email'
            component={CustomImput}
            type='text'
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
    form: 'login',
    validate: loginValidation
  }),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginPage)
