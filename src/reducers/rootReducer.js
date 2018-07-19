import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  RECEIVE_DATA,
  EDIT_USER_START,
  EDIT_USER_STOP,
  EDIT_USER_CANCEL,
  RECEIVE_TASK,
  SELECT_TASK,
  SELECT_USER,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
  MESSAGE_DATA
} from '../actions/actionsTypes'

function dataUser(state = [], action) {
  switch (action.type) {
  case RECEIVE_DATA:
    return Object.assign({}, state, { users: action.data })
  default:
    return state
  }
}

function editing(state = [], action) {
  switch (action.type) {
  case EDIT_USER_START:
    return Object.assign({}, state, { isEditing: action.isEdit })
  case EDIT_USER_STOP:
    return Object.assign({}, state, { isEditing: action.isEdit, editData: action.newData })
  case EDIT_USER_CANCEL:
    return Object.assign({}, state, { isEditing: action.isEdit })
  default:
    return state
  }
}

function tasksData(state = [], action) {
  switch (action.type) {
  case RECEIVE_TASK:
    return Object.assign({}, state, { tasks: action.tasks })
  case SELECT_TASK:
    return Object.assign({}, state, {
      currentTask: action.taskId,
      currentTaskInfo: state.tasks[action.taskId] })
  default:
    return state
  }
}

function chatData(state = {
  open: false
}, action) {
  switch (action.type) {
  case SELECT_USER:
    return Object.assign({}, state, {
      currentUser: action.userId
    })
  case OPEN_DIALOG:
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      open: action.open
    })
  case MESSAGE_DATA:
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      open: state.open,
      msg: action.msgData[state.currentUser] })
  case CLOSE_DIALOG:
    return Object.assign({}, state, { open: action.open })
  case SEND_MESSAGE:
    return Object.assign({}, state, {
      open: state.open,
      msgTo: action.msgTo,
      from: action.from
    })
  case RECEIVE_MESSAGE:
    return Object.assign({}, state, {
      open: state.open,
      msgFrom: action.msgFrom,
      to: state.currentUser
    })
  default:
    return state
  }
}


const rootReducer = combineReducers({
  dataUser,
  editing,
  tasksData,
  chatData,
  form: formReducer
})

export default rootReducer
