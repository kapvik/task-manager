import React, { Component } from 'react'
import { BrowserRouter as Router, Route,  } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchData } from './actions'

import ProfilePage from './components/ProfilePage'
import TasksPage from './components/TasksPage'
import TaskInfo from './components/TaskInfo'
import Dashboard from './components/Dashboard'
import LoginPage from './components/Auth/LoginPage'


class App extends Component {
  componentDidMount() {
    this.props.dataFetch()
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/user' component={ProfilePage} />
          <Route exact path='/tasks' component={TasksPage} />
          <Route path='/tasks/:number' component={TaskInfo} />
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/login' component={LoginPage} />
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
