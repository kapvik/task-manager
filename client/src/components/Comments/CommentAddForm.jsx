import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

// Own component
import CustomInput from '../CustomInput'

// Material ui styles component
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

class CommentAddForm extends Component {
  render() {
	  const { handleSubmit, submitting, pristine, close, addComment } = this.props
    const initialValues = {
      taskId: this.props.taskId
    }
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Add Comment</DialogTitle>
        <form onSubmit={handleSubmit(addComment)}>
          <DialogContent>
            <Field
              label='Full Name'
              name='comment.from'
              component={CustomInput}
              type='text'
            />
            <Field
              label='Comment...'
              name='comment.msg'
              component={CustomInput}
              type='textarea'
            />
          </DialogContent>
          <DialogActions>
            <Button
              type='button'
              onClick={close}
              color='primary'>
              Cancel
            </Button>
            <Button
              type='submit'
              onClick={close}
              disabled={pristine || submitting }
              color='primary'>
              Add comment
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  }
}

export default reduxForm({
  form: 'comments',
  onSubmitSuccess: (result, dispatch, props) => {
    props.reset('sendMsg')
  }
})(CommentAddForm)
