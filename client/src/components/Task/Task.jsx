import React, { Component } from 'react'

import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllTasks, selectedTask, fetchCurrentTask } from '../../actions'

import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  status: {
    color: theme.palette.primary.main,
    fontWeight: 700
  },
  task: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  taskInfo: {
    maxWidth: '75%'
  },
  taskLink: {
    textDecoration: 'none'
  }
})

class Task extends Component {
  componentDidMount() {
    this.props.tasksFetch()
  }

  onClickTask(id) {
    this.props.select(id)
    this.props.fetchCurrTask(id)
  }

  onClickTaskInfo(id) {
    this.props.history.push('/tasks/' + id)
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
            <ListItem
              button
              key={task._id}
              onClick={() => this.onClickTask(task._id)}
              className={classes.task}
            >
              <Link to={ `/tasks/${task._id}` } className={classes.taskLink}>
                <ListItemText
                  primary={task.title}
                  secondary={task.short_description}
                  className={classes.taskInfo}
                />
              </Link>
              <span className={classes.status}>
                {task.status}
              </span>
            </ListItem>
          ))}
        </List>
      )
    }
    return (
      <div>
        <CircularProgress />
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
)(Task)