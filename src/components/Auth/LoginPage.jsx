import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

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


class LoginPage extends Component {
  renderField({ input, label, type }) {
    return (
      <Grid item md={3} >
        <FormControl >
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
        onSubmit={handleSubmit(this.props.submit)}
        className={classes.formLogin}>
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
                    Submit
          </Button>
        </div>
      </form>)
  }
}

const mapStateToProps = state => ({
  user: state.dataUser
})

const mapDispatchToProps = dispatch => ({
  submit: (user) => dispatch(login(user))
})


export default compose(
  withStyles(styles),
  reduxForm({
    form: 'login'
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(LoginPage)
