import React, { Component } from 'react'
import User from './User'


import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

class ProfilePage extends Component {
  render() {
    return (
      <Grid container >
        <Grid item xs={12}>
          <AppBar position='sticky'>
            <Toolbar variant='dense'>
              <Typography variant='title' color='inherit'>
                Personal Task Manager
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <User />

      </Grid>
    )
  }
}


export default ProfilePage
