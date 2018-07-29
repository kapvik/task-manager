import { taskConstants } from '../constants'

export function tasksData(state = {
  isEdit: false,
  isAdd: false,
  showTaskForm: false
}, action) {
  switch (action.type) {
  case taskConstants.RECEIVE_ALL_TASKS:
    return Object.assign({}, state, {
      tasks: action.tasks
    })
  case taskConstants.SELECT_TASK:
    return Object.assign({}, state, {
      currentTask: action.taskId
    })
  case taskConstants.ADD_COMMENT:
  case taskConstants.RECEIVE_CURRENT_TASK:
    return Object.assign({}, state, {
      currentTaskInfo: action.task
    })
  case taskConstants.RECEIVE_COMMENT:
    return Object.assign({}, state, {
      comment: action.commentData
    })
  case taskConstants.EDIT_CURRENT_TASK:
    return Object.assign({}, state, {
      currentTaskInfo: action.editData,
      showTaskForm: action.showTaskForm,
      isEdit: action.isEdit
    })
  case taskConstants.EDIT_TASK_START:
    return Object.assign({}, state, {
      showTaskForm: action.showTaskForm,
      isEdit: action.isEdit
    })
  case taskConstants.SHOW_TASK_FORM_CANCEL:
    return Object.assign({}, state, {
      showTaskForm: action.showTaskForm
    })
  case taskConstants.ADD_TASK_STOP:
    return Object.assign({}, state, {
      showTaskForm: action.showTaskForm,
      isAdd: action.isAdd,
      tasks: [...action.task]
    })
  case taskConstants.ADD_TASK_START:
    return Object.assign({}, state, {
      showTaskForm: action.showTaskForm,
      isAdd: action.isAdd
    })
  case taskConstants.DELETE_TASK_START:
    return Object.assign({}, state, {
      deleteModalShow: action.deleteModalShow
    })
  case taskConstants.DELETE_CURRENT_TASK:
    return Object.assign({}, state, {
      currentTaskInfo: {},
      deleteModalShow: action.deleteModalShow
    })
  case taskConstants.DELETE_TASK_CANCEL:
    return Object.assign({}, state, {
      deleteModalShow: action.deleteModalShow
    })

  default:
    return state
  }
}
