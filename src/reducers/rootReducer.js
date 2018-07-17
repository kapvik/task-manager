import { combineReducers } from 'redux'
import {
  RECEIVE_DATA,
  EDIT_USER_START,
  EDIT_USER_STOP,
  EDIT_USER_CANCEL,
  RECEIVE_TASK,
  SELECT_TASK
} from '../actions/actionsTypes'

function dataUser(state = [], action) {
  switch (action.type) {
  case RECEIVE_DATA:
    return Object.assign({}, state, { user: action.data })
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

const rootReducer = combineReducers({
  dataUser,
  editing,
  tasksData
})

export default rootReducer
