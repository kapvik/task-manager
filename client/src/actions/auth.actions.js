import { authConstants } from '../constants'
import axios from 'axios'

export const loginReq = (user, loggedIn) => ({
  type: authConstants.LOGIN_REQUEST,
  user,
  loggedIn
})

export const login = () => {
  return dispatch => {
    return axios.post('http://localhost:3007/sign-in')
      .then(response => {
        dispatch(loginReq(response))
      })
  }
}

export const logout = () => ({
  type: authConstants.LOGOUT
})

export const logoutUser = () => {
  return dispatch => {
    return axios.post('http://localhost:3007/sign-out')
      .then(() => {
        dispatch(logout())
      })
  }
}

export const registerReq = (user) => ({
  type: authConstants.REGISTER_REQUEST,
  user
})

export const register = () => {
  return dispatch => {
    return axios.post('http://localhost:3007/sign-up')
      .then(response => {
        dispatch(registerReq(response))
      })
  }
}
