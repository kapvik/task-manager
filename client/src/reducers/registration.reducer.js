import { authConstants } from '../constants'

export function registration(state = {}, action) {
  switch (action.type) {
  case authConstants.REGISTER_REQUEST:
    return Object.assign({}, state, {
      regitering: true,
      user: action.user
    })
  case authConstants.REGISTER_SUCCESS:
    return Object.assign({}, state, {
      regitering: true,
      user: action.user,
      error: {}
    })
  case authConstants.REGISTER_FAILURE:
    return Object.assign({}, state, {
      regitering: true,
      error: action.error
    })
  default:
    return state
  }
}
