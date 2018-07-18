import React, { Component } from 'react'

import Task from './Task'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
}
class TasksPage extends Component {
  render() {
  	const { classes } = this.props
  	return (
  		<div className={classes.root}>
        <AppBar position='sticky'>
          <Toolbar variant='dense'>
            <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit'>
            Tasks
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container >
          <Grid item xs={12}>
        <Task />
        </Grid>
        </Grid>
      </div>)
  }
}

export default withStyles(styles)(TasksPage)
