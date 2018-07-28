const express = require('express');

//import controller file
const taskController = require('../controllers/task.server.controller');

// get an instance of express router
const router = express.Router();

router.route('/tasks')
  .get(taskController.getTasks)  
  .post(taskController.addTask)

router.route('/tasks/:_id')
  .get(taskController.getTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask)

router.route('/tasks/:_id/comment')
  .put(taskController.addComment)

module.exports = router
