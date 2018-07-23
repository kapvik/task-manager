import { chatConstants } from '../constants'
import axios from 'axios'

export const startChating = () => ({
  type: chatConstants.OPEN_DIALOG,
  open: true
})

export const openigDialog = () => {
  return dispatch => dispatch(startChating())
}

export const stopChating = () => ({
  type: chatConstants.CLOSE_DIALOG,
  open: false
})

export const closingDialog = () => {
  return dispatch => dispatch(stopChating())
}

export const receiveMessageData = msgData => ({
  type: chatConstants.MESSAGE_DATA,
  msgData
})

export const fetchMessages = () => {
  return dispatch => {
    return axios.get('/chatMsg.json')
      .then(response => {
        dispatch(receiveMessageData(response.data))
      })
  }
}

export const sendMessage = (msg, from) => ({
  type: chatConstants.SEND_MESSAGE,
  send: {
    msg,
    from,
    date: NOW() 
  }
})

// function to get current date in 'hh:mm dd-mm-yyyy' format 
function NOW() {

  let date = new Date()
  let yyyy = date.getFullYear()
  let dd = date.getDate()
  let mm = (date.getMonth() + 1)
  let hours = date.getHours()
  let minutes = date.getMinutes()

  let cur_day = `${dd}-${mm}-${yyyy}`

  return `${hours}:${minutes} ${cur_day}`
}

export const sendingMessage = (msg, from = 'admin') => {
  return dispatch => dispatch(sendMessage(msg, from))
}

export const receiveMessage = (msgFrom, to) => ({
  type: chatConstants.RECEIVE_MESSAGE,
  msgFrom,
  to
})

export const receivingMessage = (msg, to) => {
  return dispatch => dispatch(receiveMessage(msg, to))
}

export const selectUser = userId => ({
  type: chatConstants.SELECT_USER,
  userId
})

export const selectedUser = userId => {
  return dispatch => dispatch(selectUser(userId))
}
