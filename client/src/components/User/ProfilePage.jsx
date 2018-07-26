import React, { Component } from 'react'
import User from './User'

import { startEditingUser } from '../../actions'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import HomeIcon from '@material-ui/icons/Home'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  editBtn: {
    color: theme.palette.primary.contrastText,
    position: 'absolute',
    right: '1%',
    top: 0
  },
  homeBtn: {
    color: theme.palette.primary.contrastText
  },
  btnLink: {
    position: 'absolute',
    right: '5%'
  }
})

class ProfilePage extends Component {
  constructor(props) {
    super(props)

    this.onClickEdit = this.onClickEdit.bind(this)
  }
  onClickEdit() {
    this.props.editProfile()
  }

  render() {
    const { classes } = this.props
    return (
      <Grid container >
        <Grid item xs={12}>
          <AppBar position='sticky'>
            <Toolbar variant='dense'>
              <Typography variant='title' color='inherit'>
                Personal Task Manager
              </Typography>
              <IconButton aria-label='Edit' onClick={ this.onClickEdit } className={classes.editBtn}>
                <EditIcon />
              </IconButton>
              <Link
                to='/'
                className={classes.btnLink}
              >
                <IconButton aria-label='Home' className={classes.homeBtn}>
                  <HomeIcon />
                </IconButton>
              </Link>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12} >
          <User />
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editProfile: () => dispatch(startEditingUser())
})

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
)(ProfilePage)
