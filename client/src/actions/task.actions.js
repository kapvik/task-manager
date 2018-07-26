import { taskConstants } from '../constants'
import axios from 'axios'

// receive all tasks from static tasks.json
export const receiveTasks = tasks => ({
  type: taskConstants.RECEIVE_ALL_TASKS,
  tasks
})

export const fetchAllTasks = () => {
  return dispatch => {
    return axios.get('http://localhost:3007/tasks')
      .then(response => {
        dispatch(receiveTasks(response.data.tasks))
      })
  }
}

// select task and receive its id
export const selectTask = taskId => ({
  type: taskConstants.SELECT_TASK,
  taskId
})

export const selectedTask = taskId => {
  return dispatch => dispatch(selectTask(taskId))
}

// receive current task
export const receiveCurrentTask = task => ({
  type: taskConstants.RECEIVE_CURRENT_TASK,
  task
})

export const fetchCurrentTask = (task_id) => {
  return dispatch => {
    return axios.get(`http://localhost:3007/tasks/${task_id}`)
      .then(response => {
        dispatch(receiveCurrentTask(response.data.task))
      })
  }
}

// Add comment to current task
export const addComment = (comment) => ({
  type: taskConstants.ADD_COMMENT,
  comment
})

export const addedComment = (task_id, comment) => {
  return dispatch => {
    return axios.post(`http://localhost:3007/tasks/${task_id}`)
      .then(response => {
        dispatch(addComment(response.data.comment))
      })
  }
}

// receive comments for current task
export const receiveComment = commentData => ({
  type: taskConstants.RECEIVE_COMMENT,
  commentData
})

export const fetchComments = () => {
  return dispatch => {
    return axios.get('/comments.json')
      .then(response => {
        dispatch(receiveComment(response.data))
      })
  }
}

// Redirect to edit page
export const startEditTask = () => ({
  type: taskConstants.EDIT_TASK_START,
  isEditTask: true
})

export const startEditingTask = () => {
  return dispatch => dispatch(startEditTask())
}

export const cancelEditTask = () => ({
  type: taskConstants.EDIT_TASK_CANCEL,
  isEditTask: false
})

export const cancelEditingTask = () => {
  return dispatch => dispatch(cancelEditTask())
}


// Edit current task
export const editCurrTask = (...editData) => ({
  type: taskConstants.EDIT_CURRENT_TASK,
  editData,
  isEditTask: false
})

export const editingCurrTask = (...editData) => {
  return dispatch => {
    return axios.put(`http://localhost:3007/tasks/${editData._id}`, { editData })
      .then(response => {
        dispatch(editCurrTask(response.data))
      })
  }
}
