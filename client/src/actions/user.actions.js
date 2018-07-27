import { userConstants } from '../constants'
import axios from 'axios'
import { getToken } from '../utils/token'

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
    return axios.get(`http://localhost:3007/me/${getToken()}`)
      .then(response => {
        dispatch(receiveCurrUser(response.data.user))
      })
  }
}

// render component with redux-form for editing user's information
export const startEditProfile = () => ({
  type: userConstants.EDIT_USER_START,
  isEdit: true
})

export const startEditingUser = () => {
  return dispatch => dispatch(startEditProfile())
}

// cancel editing and rerender User component
export const cancelEditData = () => ({
  type: userConstants.EDIT_USER_CANCEL,
  isEdit: false
})

export const cancelEditingUser = () => {
  return dispatch => dispatch(cancelEditData())
}

// submit edit data and rerender User component
export const stopEditData = newData => ({
  type: userConstants.EDIT_USER_STOP,
  newData,
  isEdit: false
})

export const stopEditingUser = (newData) => {
  return dispatch => {
    return axios.put(`http://localhost:3007/user/${newData._id}`)
      .then(() => {
        dispatch(stopEditData(newData))
      })
  }
}
