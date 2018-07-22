import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import compose from 'recompose/compose'
import { connect } from 'react-redux'

import { logoutUser } from '../actions'
import Task from './Task/Task'
import UsersList from './User/UsersList'

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import InputIcon from '@material-ui/icons/Input'
import Popover from '@material-ui/core/Popover'
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


class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      anchorExit: null
    }
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this)
    this.handlePopoverClose = this.handlePopoverClose.bind(this)
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleDrawerOpen() {
    this.setState({ open: true })
  }

  handleDrawerClose() {
    this.setState({ open: false })
  }

  handlePopoverOpen(e) {
    this.setState({ anchorExit: e.target })
  }

  handlePopoverClose() {
    this.setState({ anchorExit: null })
  }

  handleLogout() {
    this.props.logout()
  }

  render() {
  	const { classes } = this.props
  	const { open, anchorExit } = this.state
    const show = Boolean(anchorExit)
    const drawer = (
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
          <IconButton onClick={this.handleDrawerClose}>
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
      </Drawer>)
    const popoverExit = (text) => (
      <Popover
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={show}
        anchorEl={anchorExit}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onClose={this.handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>{text}</Typography>
      </Popover>
    )
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes.appBarShiftLeft]: open
            })}
            position='sticky'
          >
            <Toolbar disableGutters={!open}
              className={classes.topMenu}
            >
              <div
                className={classes.leftMenuGroup}
              >
                <IconButton
                  color='inherit'
                  aria-label='Open drawer'
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant='title' color='inherit' noWrap>
                  Dashboard
                </Typography>
              </div>
              <div
                className={classes.btnGroup}
              >
                <Link
                  to='/user'
                  className={classes.menuItem}
                >
                  <IconButton
                    color='inherit'
                    className={classes.userBtn}
                  >
                    <PermIdentityIcon />
                  </IconButton>
                </Link>
                <IconButton
                  color='inherit'
                  className={classes.userBtn}
                  onMouseEnter={this.handlePopoverOpen}
                  onMouseLeave={this.handlePopoverClose}
                  onClick={ this.handleLogout }
                >
                  <InputIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          { drawer }
          { popoverExit('Log out') }
          <main
            className={classNames(classes.content, classes.contentLeft,
              { [classes.contentShift]: open,
                [classes.contentShiftLeft]: open
              })}>
            <div className={classes.drawerHeader} />
            <Grid container>
              <Grid item xs={6}>
                <Typography
                  variant='title'
                  align='center'
                  color='primary'
                > Tasks
                </Typography>
                <Task />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant='title'
                  align='center'
                  color='primary'
                > Users
                </Typography>
                <UsersList />
              </Grid>
            </Grid>
          </main>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  user: state.dataUser,
  auth: state.authentication
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
})
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Dashboard)
