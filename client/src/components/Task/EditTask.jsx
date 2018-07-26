import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { stopEditingTask, editingCurrTask } from '../../actions'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

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
class EditTask extends Component {
  constructor(props) {
    super(props)

    this.onClickCancel = this.onClickCancel.bind(this)
  }
  renderField({ input, label, type }) {
    return (
      <Grid item md={3} >
        <TextField
          label={label}
          {...input}
          type={type}
        />
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
        Edit Task form
        </Typography>
        <Field
          label='Task title'
          name='title'
          component={this.renderField}
          type='name'
        />
        <Field
          label='short description'
          name='short_description'
          component={this.renderField}
          type='name' />
        <Field
          label='full description'
          name='full_description'
          component={this.renderField}
          type='email' />
        <Field
          label='Status'
          name='status'
          component={this.renderField}
          type='text'
          fullWidth
        />
        <Field
          label='Performer'
          name='performer'
          component={this.renderField}
          type='text'
          fullWidth
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
  initialValues: state.tasksData.currentTaskInfo
})

const mapDispatchToProps = dispatch => ({
  cancel: () => dispatch(stopEditingTask()),
  submitForm: (newTaskData) => dispatch(editingCurrTask(newTaskData))
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  reduxForm({
    form: 'editUser'
  })
)(EditTask)
