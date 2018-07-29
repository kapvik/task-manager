import React, { Component } from 'react'

import { Link } from 'react-router-dom'

// Own styles
import styles from './sidebar.styles'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

class SideMenu extends Component {
  render() {
  	const { classes, open, close } = this.props
    return (
      <Drawer
        variant='persistent'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography
            variant='subheading'
            color='primary'
            noWrap
          >
                Personal task manager
          </Typography>
          <IconButton onClick={close}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Link
          to='/tasks'
          className={classes.menuItem}
        >
          <List>Tasks page</List>
        </Link>
        <Link
          to='/user'
          className={classes.menuItem}
        >
          <List>User page</List>
        </Link>
        <Divider />
      </Drawer>
    )
  }
}

export default withStyles(styles)(SideMenu)
