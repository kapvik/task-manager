import { userConstants } from '../constants'

export function dataUser(state = [], action) {
  switch (action.type) {
  case userConstants.RECEIVE_DATA:
    return Object.assign({}, state, { users: action.data })
  default:
    return state
  }
}

export function editing(state = [], action) {
  switch (action.type) {
  case userConstants.EDIT_USER_START:
    return Object.assign({}, state, { isEditing: action.isEdit })
  case userConstants.EDIT_USER_STOP:
    return Object.assign({}, state, { isEditing: action.isEdit, editData: action.newData })
  case userConstants.EDIT_USER_CANCEL:
    return Object.assign({}, state, { isEditing: action.isEdit })
  default:
    return state
  }
}

