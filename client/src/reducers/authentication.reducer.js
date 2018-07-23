import { authConstants } from '../constants'

const initialState = {
  loggedIn: false,
  admin: false
}

export function authentication(state = initialState, action) {
  switch (action.type) {
  case authConstants.LOGIN_REQUEST:
    return Object.assign({}, state, {
    	loggedIn: action.loggedIn,
    	...action.user
    })
  case authConstants.LOGIN_SUCCESS:
    return Object.assign({}, state, {
      loggedIn: true,
      user: action.user
    })
  case authConstants.LOGIN_FAILURE:
    return {}
  case authConstants.LOGOUT:
    return {}
  default:
    return state
  }
}
