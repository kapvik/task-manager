import React, { Component } from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import ReactPlayer from 'react-player'

// Actions
import { showFormAuth } from '../../actions'

// Own components
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

// Own styles
import styles from './auth.styles'

// Material ui components
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'


class Auth extends Component {
  constructor() {
    super()

    this.state = {
      title: 'Task Manager'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, value) {
    this.props.showForm({ value })
  }

  render() {
  	const { classes } = this.props
  	const { value } = this.props.auth

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <AppBar position='static' color='default'>
            <Tabs
              value={ value }
              onChange={this.handleChange}
              indicatorColor='primary'
              textColor='primary'
              fullWidth
              centered
            >
              <Tab label='Log in' />
              <Tab label='Register' />
            </Tabs>
          </AppBar>
          { value === 1 && <RegisterPage/> }
          { value === 0 && <LoginPage /> }
          <div className={classes.videoBg}>
            <ReactPlayer
              url='/Agile/OGV/Agile.ogv'
              playing
              loop
              width='100%'
              height='100%'
              className={classes.videoForeground}
            />
          </div>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.authForm
})

const mapDispatchToProps = dispatch => ({
  showForm: (value) => dispatch((showFormAuth(value)))
})

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps)
)(Auth)
