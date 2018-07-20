import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchData } from './actions'

import ProfilePage from './components/ProfilePage'
import TasksPage from './components/TasksPage'
import TaskInfo from './components/TaskInfo'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth/Auth'


class App extends Component {
  componentDidMount() {
    this.props.dataFetch()
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/auth' component={Auth} />
            <Route exact path='/' component={Dashboard} />
          </Switch>
          <Route exact path='/user' component={ProfilePage} />
          <Route exact path='/tasks' component={TasksPage} />
          <Route path='/tasks/:number' component={TaskInfo} />
        </div>
      </ Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.dataUser
  }
}

const mapDispatchToProps = dispatch => ({
  dataFetch: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
