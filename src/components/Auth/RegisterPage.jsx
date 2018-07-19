import React, { Component } from 'react'
import { connect } from 'react-redux'

class RegisterPage extends Component {
  render() {
    return (
      <h1>Register Page</h1>)
  }
}

const mapStateToProps = state => ({
  registrering: state.registration
})
export default connect(mapStateToProps)(RegisterPage)
