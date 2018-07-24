import { userConstants } from '../constants'
import axios from 'axios'

// receive all users information
export const receiveData = data => ({
  type: userConstants.RECEIVE_DATA,
  data
})

export const fetchData = () => {
  return dispatch => {
    return axios.get('/users.json')
      .then(response => {
        dispatch(receiveData(response.data))
      })
  }
}

export const startEditData = () => ({
  type: userConstants.EDIT_USER_START,
  isEdit: true
})

export const startEditingUser = () => {
  return dispatch => dispatch(startEditData())
}

export const cancelEditData = () => ({
  type: userConstants.EDIT_USER_CANCEL,
  isEdit: false
})

export const cancelEditingUser = () => {
  return dispatch => dispatch(cancelEditData())
}

export const stopEditData = newData => ({
  type: userConstants.EDIT_USER_STOP,
  newData,
  isEdit: false
})

export const stopEditingUser = (...newData) => {
  return dispatch => dispatch(stopEditData(...newData))
}