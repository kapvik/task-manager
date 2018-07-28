import React, { Component } from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import ReactPlayer from 'react-player'

// Actions
import { showFormAuth } from '../../actions'

// Own components
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

// Material ui components
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    width: '100%'
  },
  videoBg: {
    background: '#fff',
  },
  videoForeground: {
    pointerEvents: 'none'
  }
})


class Auth extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, value) {
    this.props.showForm({ value })
  }

  _onReady(event) {

  }

  _onEnd(event) {
    event.target.playVideo()
  }


  render() {
  	const { classes } = this.props
  	const { value } = this.props.auth
    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    }

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
          url='/Agile/MP4/Agile.mp4'
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
