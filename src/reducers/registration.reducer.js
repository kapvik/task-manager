import { authConstants } from '../constants'

export function registration(state = {}, action) {
  switch (action.type) {
  case authConstants.REGISTER_REQUEST:
    return Object.assign({}, state, { regitering: true, ...action.user })
  case authConstants.REGISTER_SUCCESS:
    return {}
  case authConstants.REGISTER_FAILURE:
    return {}
  default:
    return state
  }
}
