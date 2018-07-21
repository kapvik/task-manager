import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import ProfilePage from './components/ProfilePage'
import TasksPage from './components/TasksPage'
import TaskInfo from './components/TaskInfo'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth/Auth'


class App extends Component {
  render() {
    const { loggedIn } = this.props.auth
    const { regitering } = this.props.registration
    const PrivateRoute = ({ component: Components, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          (loggedIn || regitering) ? (
            <Components {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/auth',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )
    return (
      <div className='App'>       
        <Route path='/auth' component={Auth} />
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute path='/user' component={ProfilePage} />
        <PrivateRoute path='/tasks' component={TasksPage} />
        <PrivateRoute path='/tasks/:number' component={TaskInfo} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authentication,
    registration: state.registration
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(App)
