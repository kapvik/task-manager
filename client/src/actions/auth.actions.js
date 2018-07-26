import { authConstants } from '../constants'
import axios from 'axios'
import { fetchCurrentUser } from './user.actions'
export const loginReq = (user, admin = false) => ({
  type: authConstants.LOGIN_REQUEST,
  user,
  admin
})

export const loginFail = error => ({
  type: authConstants.LOGIN_FAILURE,
  error
})

export const loginSuccess = user => ({
  type: authConstants.LOGIN_SUCCESS,
  user
})

export const login = ({ email, password }) => {
  return dispatch => {
    if (email === 'cool-guy@only.one.com') {
      const admin = true
      dispatch(loginReq(email, admin))
    }
    return axios.post('http://localhost:3007/sign-in', { email, password })
      .then(
        user => {
          localStorage.setItem('user', JSON.stringify(user.data.token))
          dispatch(loginSuccess(user.data.email))
          dispatch(fetchCurrentUser(user.data.token))
        },
        error => {
          dispatch(loginFail(error.toString()))
        }
      )
  }
}


export const registerReq = user => ({
  type: authConstants.REGISTER_REQUEST,
  user
})

export const registerSuccess = user => ({
  type: authConstants.REGISTER_SUCCESS,
  user
})

export const registerFail = error => ({
  type: authConstants.REGISTER_FAILURE,
  error
})

export const register = ({ email, password, username }) => {
  return dispatch => {
    return axios.post('http://localhost:3007/sign-up', { email, password, username })
      .then(
        user => {
          localStorage.setItem('user', JSON.stringify(user.data.token))
          dispatch(fetchCurrentUser(user.data.token))
          dispatch(loginReq(email))
        },
        error => {
          dispatch(registerFail(error.toString()))
        }
      )
  }
}

export const logout = () => ({
  type: authConstants.LOGOUT
})

export const logoutUser = () => {
  return dispatch => {
    localStorage.removeItem('user')
    dispatch(logout())
  }
}
