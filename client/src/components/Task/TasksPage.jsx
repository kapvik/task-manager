import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import compose from 'recompose/compose'
import { connect } from 'react-redux'

// Actions
import { startingAddTask } from '../../actions'

// Own component
import TasksList from './TasksList'
import TaskForm from './TaskForm'

// Material ui styles component
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import HomeIcon from '@material-ui/icons/Home'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  taskHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  btn: {
    color: theme.palette.primary.contrastText
  }
})

class TasksPage extends Component {
  constructor(props) {
    super(props)

    this.addNewTask = this.addNewTask.bind(this)
  }

  addNewTask() {
    this.props.showAddTask()
  }

  render() {
  	const { classes, showTaskForm } = this.props
  	return (
  		<div className={classes.root}>
        <AppBar position='sticky'>
          <Toolbar variant='dense' className={classes.taskHeader}>
            <Typography variant='title' color='inherit'>
            Tasks
            </Typography>
            { !showTaskForm &&
            <div>
              <IconButton
                aria-label='Add'
                className={classes.btn}
                onClick={this.addNewTask}
              >
                <AddIcon />
              </IconButton>
              <Link
                to='/'
              >
                <IconButton aria-label='Home' className={classes.btn}>
                  <HomeIcon />
                </IconButton>
              </Link>
            </div>
            }
          </Toolbar>
        </AppBar>
        <Grid container >
          <Grid item xs={12}>
            { !showTaskForm ? <TasksList /> : <TaskForm /> }
          </Grid>
        </Grid>
      </div>)
  }
}

const mapStateToProps = state => ({
  showTaskForm: state.tasksData.showTaskForm
})

const mapDispatchToProps = dispatch => ({
  showAddTask: () => dispatch(startingAddTask())
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(TasksPage)
