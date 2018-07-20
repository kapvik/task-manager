import { authConstants } from '../constants'
import axios from 'axios'

export const loginReq = (user, loggedIn) => ({
  type: authConstants.LOGIN_REQUEST,
  user,
  loggedIn
})

export const login = (userData) => {
  return dispatch => {
  	return axios.get('role.users.json')
  	  .then(response => {
  	  	const success = response.data.map(
        	user => user.username)
  	  	const req = success.includes(userData.user.login)
        console.log(userData.user.login)
        if (req) {
        	localStorage.setItem('user', JSON.stringify(userData.user.login))
        }

        dispatch(loginReq(userData, req))
      })
  }
}

export const logout = () => ({
  type: authConstants.LOGOUT
})
export const logoutUser = () => {
  return dispatch => {
    return (
      localStorage.removeItem('user'),
      location.reload(true),
      dispatch(logout()))
  }
}

export const registerReq = (user) => ({
  type: authConstants.REGISTER_REQUEST,
  user
})

export const register = (userData) => {
  return dispatch => dispatch(registerReq(userData))
}
