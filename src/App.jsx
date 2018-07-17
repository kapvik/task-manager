import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchData } from './actions'

import ProfilePage from './components/ProfilePage'
import TasksPage from './components/TasksPage'

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
