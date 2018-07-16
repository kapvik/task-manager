import React, { Component } from 'react';

import { connect } from 'react-redux'
import { fetchData } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.dataFetch()
  }

  render() {
    return (
      <div className="App">
        
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