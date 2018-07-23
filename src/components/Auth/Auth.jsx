import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showFormAuth } from '../../actions'
import compose from 'recompose/compose'

import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
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
          { value === 0 && <LoginPage /> }
          { value === 1 && <RegisterPage/> }
        </Grid>
      </Grid>)
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
