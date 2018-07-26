import React, { Component } from 'react'

import { Link } from 'react-router-dom'

// Own component
import Task from './Task'

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
  btnLink: {
    position: 'absolute',
    right: '1%'
  },
  homeBtn: {
    color: theme.palette.primary.contrastText
  },
  addBtn: {
    position: 'absolute',
    right: '5%',
    color: theme.palette.primary.contrastText
  }
})
class TasksPage extends Component {
  render() {
  	const { classes } = this.props
  	return (
  		<div className={classes.root}>
        <AppBar position='sticky'>
          <Toolbar variant='dense'>
            <Typography variant='title' color='inherit'>
            Tasks
            </Typography>
            <Link
                to='/'
                className={classes.btnLink}
              >
                <IconButton aria-label='Home' className={classes.homeBtn}>
                  <HomeIcon />
                </IconButton>
              </Link>
            <IconButton aria-label='Home' className={classes.addBtn}>
              <AddIcon />
            </IconButton>
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
