import { taskConstants } from '../constants'
import axios from 'axios'

// receive all tasks from static tasks.json
export const receiveTask = tasks => ({
  type: taskConstants.RECEIVE_TASK,
  tasks
})

export const fetchTasks = () => {
  return dispatch => {
    return axios.get('/tasks.json')
      .then(response => {
        dispatch(receiveTask(response.data))
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

export const addComment = (comment) => ({
  type: taskConstants.ADD_COMMENT,
  comment
})

export const addedComment = (comment) => {
  return dispatch => dispatch(addComment(comment))
}

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
