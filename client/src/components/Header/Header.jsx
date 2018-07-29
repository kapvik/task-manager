import React, { Component } from 'react'

import classNames from 'classnames'
import { Link } from 'react-router-dom'

// Own styles
import styles from './header.styles'

// Material ui components
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import InputIcon from '@material-ui/icons/Input'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

class Header extends Component {
  render() {
    const { classes, title, open, openSideMenu, popoverOpen, popoverClose, logout } = this.props
    return (
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
          <div className={classes.leftMenuGroup}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={openSideMenu}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' noWrap>
              {title}
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
              onMouseEnter={popoverOpen}
              onMouseLeave={popoverClose}
              onClick={ logout }
            >
              <InputIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header)
