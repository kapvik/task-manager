import { chatConstants } from '../constants'

export function chatData(state = {
  open: false,
  send: []
}, action) {
  switch (action.type) {
  case chatConstants.SELECT_USER:
    return Object.assign({}, state, {
      currentUser: action.userId
    })
  case chatConstants.OPEN_DIALOG:
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      open: action.open
    })
  case chatConstants.MESSAGE_DATA:
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      open: state.open,
      send: action.msgData[state.currentUser].send,
      receive: action.msgData[state.currentUser].receive })
  case chatConstants.CLOSE_DIALOG:
    return Object.assign({}, state, { open: action.open })
  case chatConstants.SEND_MESSAGE:
    return Object.assign({}, state, {
      send: state.send.concat(action.send),
      open: true,
      receive: state.receive,
      currentUser: state.currentUser
    })
  case chatConstants.RECEIVE_MESSAGE:
    return Object.assign({}, state, {
      open: state.open,
      msgFrom: action.msgFrom,
      to: state.currentUser
    })
  default:
    return state
  }
}
