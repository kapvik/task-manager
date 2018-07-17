import {
  RECEIVE_DATA,
  EDIT_USER_START,
  EDIT_USER_STOP,
  EDIT_USER_CANCEL,
  RECEIVE_TASK
} from './actionsTypes'
import axios from 'axios'


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

export const receiveTask = tasks => ({
  type: RECEIVE_TASK,
  tasks
})

export const fetchData = () => {
  return dispatch => {
    return axios.get('https://randomuser.me/api/')
      .then(response => {
        dispatch(receiveData(response.data.results))
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
