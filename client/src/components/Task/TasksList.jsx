import React, { Component } from 'react'

import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Own components
import Loader from '../Loader/Loader'

// Actions
import { fetchAllTasks, selectedTask, fetchCurrentTask } from '../../actions'

// Own styles
import styles from './tasklist.styles'

// Material ui styles component
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class TasksList extends Component {
  componentDidMount() {
    this.props.tasksFetch()
  }

  onClickTask(id) {
    this.props.select(id)
    this.props.fetchCurrTask(id)
  }

  render() {
    const { classes } = this.props
    const tasks = this.props.tasks
    if (tasks) {
      return (
        <List
          component='ul'
        >
          { tasks.map(task => (
            <Link
              to={ `/tasks/${task._id}` }
              className={classes.taskLink}
              key={task._id}
            >
              <ListItem
                button
                onClick={() => this.onClickTask(task._id)}
                className={classes.task}
              >
                <ListItemText
                  primary={task.title}
                  secondary={task.short_description}
                  className={classes.taskInfo}
                />
                <span className={classes.status}>
                  {task.status}
                </span>
              </ListItem>
            </Link>
          ))}
        </List>
      )
    }
    return (
      <div>
        <Loader />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasksData.tasks
})

const mapDispatchToProps = dispatch => ({
  tasksFetch: () => dispatch(fetchAllTasks()),
  select: (id) => dispatch(selectedTask(id)),
  fetchCurrTask: (id) => dispatch(fetchCurrentTask(id))
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(TasksList)
