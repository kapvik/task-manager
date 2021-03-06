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
export const addComment = task => ({
  type: taskConstants.ADD_COMMENT,
  task
})

export const addedComment = ({ _id, comment }) => {
  return dispatch => {
    return axios.put(`http://localhost:3007/tasks/${_id}/comment`, { comment })
      .then(response => {
        dispatch(addComment(response.data.task))
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

// Render component with redux-form for edditing new task
export const startEditTask = () => ({
  type: taskConstants.EDIT_TASK_START,
  showTaskForm: true,
  isEdit: true
})

export const startingEditTask = () => {
  return dispatch => dispatch(startEditTask())
}

// Cancel showing task form for edditing or adding task
export const cancelShowTaskForm = () => ({
  type: taskConstants.SHOW_TASK_FORM_CANCEL,
  showTaskForm: false
})

export const cancelShowingTaskForm = () => {
  return dispatch => dispatch(cancelShowTaskForm())
}


// Edit current task
export const editCurrTask = editData => ({
  type: taskConstants.EDIT_CURRENT_TASK,
  editData,
  showTaskForm: false,
  isEdit: false
})

export const editingCurrTask = (editData) => {
  return dispatch => {
    return axios.put(`http://localhost:3007/tasks/${editData._id}`, editData)
      .then((response) => {
        dispatch(editCurrTask(response.data.task))
      })
  }
}

// Render component with redux-form for adding new task
export const startingAddTask = () => ({
  type: taskConstants.ADD_TASK_START,
  isAdd: true,
  showTaskForm: true
})

export const startingFormToAddTask = () => {
  return dispatch => dispatch(startingAddTask())
}

// Add new task
export const addTask = task => ({
  type: taskConstants.ADD_TASK_STOP,
  task,
  showTaskForm: false,
  isAdd: false
})

export const addingTask = task => {
  return dispatch => {
    return axios.post('http://localhost:3007/tasks', task)
      .then(() => dispatch(addTask(task)))
  }
}

// Starting delete current task
export const startDeleteTask = () => ({
  type: taskConstants.DELETE_TASK_START,
  deleteModalShow: true
})

export const startingDeleteTask = () => {
  return dispatch => dispatch(startDeleteTask())
}

// Cancel delete
export const cancelDeleteTask = () => ({
  type: taskConstants.DELETE_TASK_CANCEL,
  deleteModalShow: false
})

export const cancelingDeleteTask = () => {
  return dispatch => dispatch(cancelDeleteTask())
}

// Delete current task
export const deleteTask = () => ({
  type: taskConstants.DELETE_CURRENT_TASK,
  deleteModalShow: false
})

export const deletingTask = task_id => {
  return dispatch => {
    return axios.delete(`http://localhost:3007/tasks/${task_id}`)
      .then(() => dispatch(deleteTask()))
  }
}
