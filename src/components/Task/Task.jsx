import React, { Component } from 'react'

import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchTasks, selectedTask } from '../../actions'

import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'


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
  }
})

class Task extends Component {
  componentDidMount() {
    this.props.taskFetch()
  }

  onClickTask(id) {
    this.props.select(id)
  }

  onClickTaskInfo(id) {
    this.props.history.push('/task/'+ id)
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
              key={task.task_id}
              onClick={() => this.onClickTask(task.task_id)}
              className={classes.task}
            >
                <ListItemText
                  primary={task.title}
                  secondary={task.short_description}
                  onClick={() => this.onClickTaskInfo(task.task_id)}
                  className={classes.taskInfo}
                />
                <Select
                  value={task.status}
                  className={classes.status}
                >
                  <MenuItem value='To Do' selected>To Do</MenuItem>
                  <MenuItem value='In Progress' selected>In Progress</MenuItem>
                  <MenuItem value='Peer Review' selected>Peer Review</MenuItem>
                  <MenuItem value='Done' selected>Done</MenuItem>
                </Select>
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
  taskFetch: () => dispatch(fetchTasks()),
  select: (id) => dispatch(selectedTask(id))
})

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Task)
