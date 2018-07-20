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
  MESSAGE_DATA,
  AUTH_LOGIN,
  AUTH_REGISTER,
  FORM_SHOW
} from './actionsTypes'
import axios from 'axios'

// receive all users information
export const receiveData = data => ({
  type: RECEIVE_DATA,
  data
})

export const startEditData = () => ({
  type: EDIT_USER_START,
  isEdit: true
})

export const cancelEditData = () => ({
  type: EDIT_USER_CANCEL,
  isEdit: false
})

export const stopEditData = newData => ({
  type: EDIT_USER_STOP,
  newData,
  isEdit: false
})

// receive all tasks
export const receiveTask = tasks => ({
  type: RECEIVE_TASK,
  tasks
})

export const selectTask = taskId => ({
  type: SELECT_TASK,
  taskId
})

export const selectUser = userId => ({
  type: SELECT_USER,
  userId
})

export const startChating = () => ({
  type: OPEN_DIALOG,
  open: true
})

export const stopChating = () => ({
  type: CLOSE_DIALOG,
  open: false
})

export const receiveMessageData = msgData => ({
  type: MESSAGE_DATA,
  msgData
})

export const sendMessage = (msgTo, from) => ({
  type: SEND_MESSAGE,
  msgTo,
  from
})

export const receiveMessage = (msgFrom, to) => ({
  type: RECEIVE_MESSAGE,
  msgFrom,
  to
})

export const authLogin = (loginData) => ({
  type: AUTH_LOGIN,
  loginData
})
export const authRegister = (regData) => ({
  type: AUTH_LOGIN,
  regData
})

export const showForm = show => ({
  type: FORM_SHOW,
  show
})

export const fetchData = () => {
  return dispatch => {
    return axios.get('users.json')
      .then(response => {
        dispatch(receiveData(response.data))
      })
  }
}

export const startEditingUser = () => {
  return dispatch => dispatch(startEditData())
}

export const cancelEditingUser = () => {
  return dispatch => dispatch(cancelEditData())
}

export const stopEditingUser = (...newData) => {
  return dispatch => dispatch(stopEditData(...newData))
}

export const fetchTasks = () => {
  return dispatch => {
    return axios.get('tasks.json')
      .then(response => {
        dispatch(receiveTask(response.data))
      })
  }
}

export const selectedTask = taskId => {
  return dispatch => dispatch(selectTask(taskId))
}

export const selectedUser = userId => {
  return dispatch => dispatch(selectUser(userId))
}

export const openigDialog = () => {
  return dispatch => dispatch(startChating())
}

export const closingDialog = () => {
  return dispatch => dispatch(stopChating())
}

export const fetchMessages = () => {
  return dispatch => {
    return axios.get('chatMsg.json')
      .then(response => {
        dispatch(receiveMessageData(response.data))
      })
  }
}

export const sendingMessage = (msg, from = 'admin') => {
  return dispatch => dispatch(sendMessage(msg, from))
}

export const receivingMessage = (msg, to) => {
  return dispatch => dispatch(receiveMessage(msg, to))
}

export const login = (loginData) => {
  return dispatch => dispatch(authLogin(loginData))
}

export const register = (regData) => {
  return dispatch => dispatch(authLogin(regData))
}

export const showFormAuth = show => {
  return dispatch => dispatch(showForm(show))
}

