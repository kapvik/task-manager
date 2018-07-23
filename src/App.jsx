import React, { Component, Fragment } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import ProfilePage from './components/User/ProfilePage'
import TasksPage from './components/Task/TasksPage'
import TaskInfo from './components/Task/TaskInfo'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth/Auth'


class App extends Component {
  render() {
    const { loggedIn } = this.props.auth
    const { registering } = this.props.registration
    const PrivateRoute = ({ component: Components, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          (loggedIn || registering) ? (
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
      <Fragment>       
        <Switch>
          <Route path='/auth' component={Auth} />
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute exat path='/user' component={ProfilePage} />
          <PrivateRoute exat path='/tasks' component={TasksPage} />
          <PrivateRoute exact path='/task/:number' component={TaskInfo} />
        </Switch>
      </Fragment>
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
