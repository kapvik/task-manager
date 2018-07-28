import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

// Actions
import {
  cancelShowingTaskForm,
  editingCurrTask,
  fetchData,
  addingTask
} from '../../actions'

// Material ui styles component
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const styles = () => ({
  btnGroup: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  formEdit: {
    marginTop: '50px',
    textAlign: 'center'
  },
  btn: {
    color: '#fff',
    backgroundColor: '#3f51b5',
    '&:hover': {
      backgroundColor: '#2c387e'
    },
    '&:not(:last-of-type)': {
      marginRight: '15px'
    }
  }
})
class TaskForm extends Component {
  constructor(props) {
    super(props)

    this.onClickCancel = this.onClickCancel.bind(this)
  }

  componentDidMount() {
    this.props.dataFetch()
  }

  renderField({ input, label, type }) {
    return (
      <Grid item md={12} >
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
    const {
      handleSubmit,
      submitting,
      pristine,
      classes,
      isEdit,
      isAdd,
      performers,
      submitEdit,
      submitAdd
    } = this.props
    return (
      <form
        onSubmit={ isEdit ? handleSubmit(submitEdit) : handleSubmit(submitAdd)}
        className={classes.formEdit}
      >
        <Typography
          color='primary'
          variant='title'
          align='center'
        >
          { isEdit && 'Edit' } { isAdd && 'Add'} Task
        </Typography>
        <Field
          label='Task title'
          name='title'
          component={this.renderField}
          type='text'
        />
        <Field
          label='Short description'
          name='short_description'
          component={this.renderField}
          type='text' />
        <Field
          label='Full description'
          name='full_description'
          component={this.renderField}
          type='text' />
        <Field name='status' component='select'>
          { ['To Do', 'Peer Review', 'Done', 'In Progress'].map(status =>
            <option key={status} value={status}>{status}</option>
          )
          }
        </Field>
        <Field name='performer.username' component='select'>
          { performers && performers.map(performer =>
            (<option key={performer.username} value={ performer.username }>
              { performer.username }
            </option>)
          )
          }
        </Field>
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
  initialValues: state.tasksData.currentTaskInfo,
  isEdit: state.tasksData.isEdit,
  isAdd: state.tasksData.isAdd,
  performers: state.dataUser.users
})

const mapDispatchToProps = dispatch => ({
  dataFetch: () => dispatch(fetchData()),
  cancel: () => dispatch(cancelShowingTaskForm()),
  submitEdit: (newTaskData) => dispatch(editingCurrTask(newTaskData)),
  submitAdd: (newTask) => dispatch(addingTask(newTask))
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  reduxForm({
    form: 'editTask'
  })
)(TaskForm)
