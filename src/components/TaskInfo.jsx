import React, { Component } from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
}

class TaskInfo extends Component {
  render() {
  	const taskInfo = this.props.task
  	const { classes } = this.props
    if (taskInfo) {
      return (
        <div className={classes.root}>
          <AppBar position='sticky'>
            <Toolbar variant='dense'>
              <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
                <MenuIcon />
              </IconButton>
              <Typography variant='title' color='inherit'>
                { taskInfo.title }
              </Typography>
            </Toolbar>
          </AppBar>
          status: {taskInfo.status}
          <br/>
          desc: {taskInfo.full_description}
        </div>)
    }
    return (
      <div>
        <CircularProgress />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  task: state.tasksData.currentTaskInfo
})


export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(TaskInfo)
