import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { stopEditingUser, cancelEditingUser } from '../../actions'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  btnGroup: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around'
  },
  formEdit: {
    marginTop: '50px'
  },
  btn: {
    color: '#fff',
    backgroundColor: '#3f51b5',
    '&:hover': {
      backgroundColor: '#2c387e'
    }
  }
})
class EditForm extends Component {
  constructor(props) {
    super(props)

    this.onClickCancel = this.onClickCancel.bind(this)
  }
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

  onClickCancel() {
    this.props.cancel()
  }

  render() {
    const { handleSubmit, submitting, pristine, classes } = this.props
    return (
      <form
        onSubmit={handleSubmit(this.props.submitForm)}
        className={classes.formEdit}
      >
        <Typography
          color='primary'
          variant='title'
          align='center'
        >
        Edit form
        </Typography>
        <Field
          label='FirstName'
          name='firstname'
          component={this.renderField}
          type='name'
        />
        <Field
          label='LastName'
          name='lastname'
          component={this.renderField}
          type='name' />
        <Field
          label='Email'
          name='email'
          component={this.renderField}
          type='email' />
        <Field
          label='Date of Birth'
          name='dob'
          component={this.renderField}
          type='text'
        />
        <Field
          label='Skills'
          name='skills'
          component={this.renderField}
          type='text'
        />
        <div className={ classes.btnGroup }>
          <Button
            variant='outlined'
            type='submit'
            disabled={pristine || submitting }
            className={classes.btn}
            >
                    Submit
          </Button>
          <Button
            variant='outlined'
            type='reset'
            onClick={ this.onClickCancel }
            className={classes.btn}
          >
                    Cancel
          </Button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  isEdit: state.editing,
  initialValues: state.dataUser.users[0]
})

const mapDispatchToProps = dispatch => ({
  cancel: () => dispatch(cancelEditingUser()),
  submitForm: (newData) => dispatch(stopEditingUser(newData))
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  reduxForm({
    form: 'editUser'
  })
)(EditForm)
