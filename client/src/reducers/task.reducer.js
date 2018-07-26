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
  case taskConstants.EDIT_CURRENT_TASK:
    return Object.assign({}, state, {
      currentTaskInfo: action.editData,
      isEditTask: action.isEditTask
    })
  case taskConstants.EDIT_TASK_START:
    return Object.assign({}, state, {
      isEditTask: action.isEditTask
    })
  case taskConstants.EDIT_TASK_CANCEL:
    return Object.assign({}, state, {
      isEditTask: action.isEditTask
    })
  default:
    return state
  }
}
