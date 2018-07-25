import { showConstants } from '../constants'

export function authForm(state = {
  value: 0,
  showMenu: false
}, action) {
  switch (action.type) {
  case showConstants.FORM_SHOW:
    return Object.assign({}, state, {
      ...action.show
    })
  default:
    return state
  }
}
