import React, { Component, Fragment } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import ProfilePage from './components/User/ProfilePage'
import TasksPage from './components/Task/TasksPage'
import TaskInfo from './components/Task/TaskInfo'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth/Auth'

const { whyDidYouUpdate } = require('why-did-you-update')
whyDidYouUpdate(React)

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
          <PrivateRoute exact path='/user' component={ProfilePage} />
          <PrivateRoute exact path='/tasks' component={TasksPage} />
          <PrivateRoute exact path='/tasks/:id' component={TaskInfo} />
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

export default withRouter(connect(mapStateToProps)(App))
