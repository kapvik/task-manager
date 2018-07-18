import React, { Component } from 'react'

import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTasks, selectedTask } from '../actions'

import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
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
    display: 'flex',
    justifyContent: 'flex-end'
  },
  task: {
    display: 'flex',
    textDecoration: 'none',
    maxWidth: '90%'
  }
})

class Task extends Component {
  componentDidMount() {
    this.props.taskFetch()
  }

  onClickTask(id) {
    this.props.select(id)
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
                <ListItem button key={task.task_id} onClick={ () => this.onClickTask(task.task_id)}>
                  <Link to={`/tasks/${task.task_id}`} className={classes.task}>
                    <ListItemText
                      primary={task.title}
                      secondary={task.short_description}
                    />
                  </Link>
                  <ListItemSecondaryAction className={classes.status}>
                    <Select
                      value={task.status}
                    >
                      <MenuItem value='To Do'>To Do</MenuItem>
                      <MenuItem value='In Progress'>In Progress</MenuItem>
                      <MenuItem value='Peer Review'>Peer Review</MenuItem>
                      <MenuItem value='Done'>Done</MenuItem>
                    </Select>
                  </ListItemSecondaryAction>
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
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Task)
