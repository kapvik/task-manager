import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import classNames from 'classnames'

// Custom validation
import { taskEditOrAddValidation } from '../../../utils/validation'

// Actions
import {
  cancelShowingTaskForm,
  editingCurrTask,
  fetchData,
  addingTask
} from '../../../actions'

// Own components
import CustomImput from '../../CustomInput'

// Own styles
import styles from './taskform.styles'

// Material ui styles component
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'

class TaskForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: {
        edit: 'Edit',
        add: 'Add'
      }
    }
    this.onClickCancel = this.onClickCancel.bind(this)
  }

  componentDidMount() {
    this.props.dataFetch()
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
      submitAdd,
      open
    } = this.props
    const { title } = this.state
    return (
      <Modal
        open={open}
        onClose={this.onClickCancel}
      >
        <form
          onSubmit={ isEdit ? handleSubmit(submitEdit) : handleSubmit(submitAdd)}
          className={classNames(classes.paper, classes.modalCenter, classes.formEdit)}
        >
          <Typography
            color='primary'
            variant='title'
            align='center'
          >
            { isEdit && title.edit } { isAdd && title.add} Task
          </Typography>
          <Field
            label='Task title'
            name='title'
            component={CustomImput}
            type='text'
          />
          <Field
            label='Short description'
            name='short_description'
            component={CustomImput}
            type='text' />
          <Field
            label='Full description'
            name='full_description'
            component={CustomImput}
            type='text' />
          <Field
            name='status'
            component='select'
            className={classes.customSelect}
          >
            { ['To Do', 'Peer Review', 'Done', 'In Progress'].map(status =>
              <option key={status} value={status}>{status}</option>
            )
            }
          </Field>
          <Field
            name='performer'
            component='select'
            className={classes.customSelect}
          >
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
      </Modal>
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
    form: 'editTask',
    validate: taskEditOrAddValidation
  })
)(TaskForm)
