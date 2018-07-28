import React, { Component } from 'react'

import compose from 'recompose/compose'
import { connect } from 'react-redux'
import classNames from 'classnames'

// Actions
import { cancelingDeleteTask, deletingTask } from '../../actions'

// Material ui styles component
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  paper: {
    position: 'absolute',
    mawWidth: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  modalCenter: {
  	top: '50%',
  	left: '50%',
  	transform: 'translate(-50%, -50%)',
  	borderRadius: '10px'
  },
  modalWrapper: {
  	backgroundColor: '#c1c6e0a8',
  	width: '100vw',
  	height: '100vh',
  	position: 'absolute',
  	top: 0,
  	zIndex: 9990
  },
  secretBtn: {

  },
  modalTitle: {
  	marginBottom: '10px'
  }
})

class DeleteModal extends Component {
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
          	className={classes.submitBtn} onClick={() => this.props.delete(currentTaskInfo._id)}>Yes, I'm sure</Button>
          <Button
          	variant='outlined'
          	color='primary'
          	onClick={() => this.props.cancel()} className={classes.cancelBtn}>
            Nah, I changed my mind
          </Button>
          <Button
          	className={classes.secretBtn}>I'm a batman! </Button>
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
  connect(mapStateToProps, mapDispatchToProps)
)(DeleteModal)
