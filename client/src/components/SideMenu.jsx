import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  appBarShiftLeft: {
    marginLeft: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentLeft: {
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  contentShiftLeft: {
    marginLeft: 0
  },
  menuItem: {
  	textDecoration: 'none'
  },
  topMenu: {
    justifyContent: 'space-between'
  },
  leftMenuGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  userBtn: {
    color: '#fff'
  },
  paper: {
    padding: theme.spacing.unit
  },
  popover: {
    pointerEvents: 'none'
  }

})
class SideMenu extends Component {
  constructor() {
    super()
    this.handleSideMenuClose = this.handleSideMenuClose.bind(this)
  }
  render() {
  	const { classes } = this.props
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
          <IconButton onClick={this.handleSideMenuClose}>
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
