import { taskConstants } from '../constants'

export function tasksData(state = [], action) {
  switch (action.type) {
  case taskConstants.RECEIVE_TASK:
    return Object.assign({}, state, { tasks: action.tasks })
  case taskConstants.SELECT_TASK:
    return Object.assign({}, state, {
      currentTask: action.taskId,
      currentTaskInfo: state.tasks[action.taskId]
    })
  case taskConstants.ADD_COMMENT:
    return Object.assign({}, state, {
      comment: state.comment.concat(action.comment)
    })
  case taskConstants.RECEIVE_COMMENT:
    return Object.assign({}, state, {
      comment: action.commentData
    })
  default:
    return state
  }
}
