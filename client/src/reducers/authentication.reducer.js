import { authConstants } from '../constants'

let user = JSON.parse(localStorage.getItem('user'))

const initialState = user ? { loggedIn: true, admin: false } : {}

export function authentication(state = initialState, action) {
  switch (action.type) {
  case authConstants.LOGIN_REQUEST:
    return Object.assign({}, state, {
    	loggedIn: true,
      user: action.user,
      admin: action.admin
    })
  case authConstants.LOGIN_SUCCESS:
    return Object.assign({}, state, {
      user: action.user,
      loggedIn: true,
      admin: action.admin
    })
  case authConstants.LOGIN_FAILURE:
    return Object.assign({}, state, {
      error: action.error
    })
  case authConstants.LOGOUT:
    return {}
  default:
    return state
  }
}
