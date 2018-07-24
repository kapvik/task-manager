const mongoose = require('mongoose');
const { NotAcceptable, BadRequest } = require('rest-api-errors');

//import models
const { Task } = require('../models/task');

// Receive all tasks
const getTasks = (req, res) => {  
  Task.find({}, (err, tasks) => {
    if (err) {
      throw new Error(err);
    }
    res.status(200).send({'success':true,'message':'Tasks fetched successfully', tasks})    
  })  
}

// Add new task
const addTask = (req,res) => {
    const task = new Task()
    if (!req.body.title) {
      throw new NotAcceptable(405, 'Should be title');
    }
    Object.assign({}, task, req.body)
    task.save()

    res.status(200).send({'success':true,'message':'Task add successfully', task})
} 

// Receive current task
const getTask = (req, res) => {
  const { _id } = req.params;
  Task.findOne({ _id }, (err, task) => {
    if (err) {
      throw new BadRequest(400, 'Task is not find')
    }
  
    res.status(200).send({'success':true,'message':'Tasks fetched successfully', task});
    });
}

// Change task info
const updateTask = (req, res) => {
  const { _id } = req.params
  const task = Task.findOne({ _id }, (err, task) => {
    if (err) {
      throw new BadRequest(400, 'Task is not find')
    }
    Object.assign({}, task, req.body)
  task.save()
  res.status(200).send({'success':true,'message':'Task update successfully', task})
  })
}

// Delete current task
const deleteTask = (req, res) => {
  const { _id } = req.params
  const task = Task.findOne({ _id }, (err, task) => {
    if (err) {
      throw new BadRequest(400, 'Task is not find')
    }
    Task.remove({ _id })
    res.status(200).send({'success':true,'message':'Task delete successfully', task})
  })
}

module.exports = {
  getTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask
}