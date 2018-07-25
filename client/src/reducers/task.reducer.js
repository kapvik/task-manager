import { taskConstants } from '../constants'

export function tasksData(state = [], action) {
  switch (action.type) {
  case taskConstants.RECEIVE_ALL_TASKS:
    return Object.assign({}, state, { tasks: action.tasks })
  case taskConstants.SELECT_TASK:
    return Object.assign({}, state, {
      currentTask: action.taskId
    })
  case taskConstants.RECEIVE_CURRENT_TASK:
    return Object.assign({}, state, {
      currentTaskInfo: action.task
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
