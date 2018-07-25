import { chatConstants } from '../constants'
import axios from 'axios'
import { NOW } from '../utils/date'
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
    date: NOW(),
    id: Date.now()
  }
})

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
