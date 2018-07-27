import { userConstants } from '../constants'

export function dataUser(state = [], action) {
  switch (action.type) {
  case userConstants.RECEIVE_ALL_USERS:
    return Object.assign({}, state, {
      users: action.data
    })
  case userConstants.RECEIVE_CURRENT_USER:
    return Object.assign({}, state, {
      currentUser: action.user
    })
  case userConstants.EDIT_USER_START:
    return Object.assign({}, state, {
      isEditing: action.isEdit 
    })
  case userConstants.EDIT_USER_STOP:
    return Object.assign({}, state, {
      isEditing: action.isEdit,
      currentUser: action.newData })
  case userConstants.EDIT_USER_CANCEL:
    return Object.assign({}, state, {
      isEditing: action.isEdit
    })
  default:
    return state
  }
}

