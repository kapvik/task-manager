import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

// Actions
import { stopEditingUser, cancelEditingUser } from '../../actions'

// Custom validation
import { userEditValidation } from '../../utils/validation'

// Own components
import CustomImput from '../CustomInput'

// Own styles
import styles from './user.styles'

// Material ui components
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class EditForm extends Component {
  constructor(props) {
    super(props)

    this.onClickCancel = this.onClickCancel.bind(this)
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
          component={CustomImput}
          type='name'
        />
        <Field
          label='LastName'
          name='lastname'
          component={CustomImput}
          type='name' />
        <Field
          label='Email'
          name='email'
          component={CustomImput}
          type='email' />
        <Field
          label='Date of Birth'
          name='dateOfBirth'
          component={CustomImput}
          type='date'
          fullWidth
        />
        <Field
          label='Skills'
          name='skills'
          component={CustomImput}
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
  isEdit: state.dataUser.isEditing,
  initialValues: state.dataUser.currentUser
})

const mapDispatchToProps = dispatch => ({
  cancel: () => dispatch(cancelEditingUser()),
  submitForm: (newData) => dispatch(stopEditingUser(newData))
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  reduxForm({
    form: 'editUser',
    validate: userEditValidation
  })
)(EditForm)
