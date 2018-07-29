import React, { Component } from 'react'

import compose from 'recompose/compose'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'

// Actions
import { cancelingDeleteTask, deletingTask } from '../../actions'

// Own styles
import styles from './modals.styles'

// Material ui styles component
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

class DeleteModal extends Component {
  deleteTask(id) {
    this.props.delete(id).then(() =>
      this.props.history.push('/tasks'))
  }

  render() {
  	const { currentTaskInfo } = this.props.task
  	const { classes } = this.props
    return (
  		<div className={classes.modalWrapper}>
        <div className={classNames(classes.paper, classes.modalCenter)}>
          <Typography variant='title' className={classes.modalTitle}>
            <em>Delete</em> or <em>not delete</em> that is the question
          </Typography>
          <Typography variant='subheading' >
              Are you sure you want to <b>delete</b> this awesomeness task?
          </Typography>
          <Button
          	variant='outlined'
          	color='secondary'
          	className={classes.submitBtn} onClick={() => this.deleteTask(currentTaskInfo._id)}>Yes, I'm sure</Button>
          <Button
          	variant='outlined'
          	color='primary'
          	onClick={() => this.props.cancel()} className={classes.cancelBtn}>
            Nah, I changed my mind
          </Button>
        </div>
      </div>
  		)
  }
}

const mapStateToProps = state => ({
  task: state.tasksData
})

const mapDispatchToProps = dispatch => ({
  cancel: () => dispatch(cancelingDeleteTask()),
  delete: (task_id) => dispatch(deletingTask(task_id))
})

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(DeleteModal)
