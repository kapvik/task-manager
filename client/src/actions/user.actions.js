import { userConstants } from '../constants'
import axios from 'axios'

const token = localStorage.getItem('user').substr(1).slice(0, -1)
// receive all users information
export const receiveUsers = data => ({
  type: userConstants.RECEIVE_ALL_USERS,
  data
})

export const fetchData = () => {
  return dispatch => {
    return axios.get('http://localhost:3007/users')
      .then(response => {
        dispatch(receiveUsers(response.data.users))
      })
  }
}

// receive current user profile
export const receiveCurrUser = user => ({
  type: userConstants.RECEIVE_CURRENT_USER,
  user
})

export const fetchCurrentUser = () => {
  return dispatch => {
    return axios.get(`http://localhost:3007/me/${token}`)
      .then(response => {
        dispatch(receiveCurrUser(response.data.user))
      })
  }
}

export const startEditProfile = () => ({
  type: userConstants.EDIT_USER_START,
  isEdit: true
})

export const startEditingUser = () => {
  return dispatch => dispatch(startEditProfile())
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
