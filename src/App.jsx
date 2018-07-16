import React, { Component } from 'react';

import { connect } from 'react-redux'
import { fetchData } from './actions'

import ProfilePage from './components/ProfilePage'

class App extends Component {

  componentDidMount() {
    this.props.dataFetch()
  }

  render() {
    return (
      <div className="App">
        <ProfilePage />
      </div>
    );
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