import React, { Component } from 'react'

import compose from 'recompose/compose'
import { connect } from 'react-redux'

// Actions
import { logoutUser } from '../actions'

// Own components
import TasksList from './Task/TasksList'
import UsersList from './User/UsersList'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import CustomPopover from './Popover'

// Material ui styles component
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

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
    marginLeft: -240,
    marginTop: 50
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
  }
})


class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      anchorExit: null,
      title: 'Dashboard',
      popoverText: 'Log out'
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
  	const { open, anchorExit, title, popoverText } = this.state
    const show = Boolean(anchorExit)
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Header
            title={title}
            open={open}
            openSideMenu={this.handleDrawerOpen}
            popoverOpen={this.handlePopoverOpen}
            popoverClose={this.handlePopoverClose}
            logout={this.handleLogout}
          />
          <SideBar open={open} close={this.handleDrawerClose}/>
          <CustomPopover show={show} close={this.handlePopoverClose}
            text={popoverText}
          />
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
                <TasksList />
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
  user: state.dataUser
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())

})
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Dashboard)
