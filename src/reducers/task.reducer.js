import { taskConstants } from '../constants'

export function tasksData(state = [], action) {
  switch (action.type) {
  case taskConstants.RECEIVE_TASK:
    return Object.assign({}, state, { tasks: action.tasks })
  case taskConstants.SELECT_TASK:
    return Object.assign({}, state, {
      currentTask: action.taskId,
      currentTaskInfo: state.tasks[action.taskId] })
  default:
    return state
  }
}