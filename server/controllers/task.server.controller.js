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
    const newTask = req.body
    if (!req.body.title) {
      throw new NotAcceptable(405, 'Should be title');
    }
    if (!req.body.short_description) {
      throw new NotAcceptable(405, 'Should be at least short description');
    }
    const task = new Task(newTask)
    task.save((err, task) => {
      if (err) throw new Error(err)
      else if(!task) throw new NotAcceptable(405, 'Should not be an empty');
      res.status(200).send({'success':true,'message':'Task add successfully', task})
    })

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
  const task = Task.findByIdAndUpdate({ _id }, req.body, {new: true, runValidator: true}, (err, task) => {
    if (err) throw new BadRequest(400, 'Task is not find')
    res.status(200).send({'success':true,'message':'Task update successfully', task})
  })
}

// Delete current task
const deleteTask = (req, res) => {
  const { _id } = req.params
  const task = Task.findByIdAndRemove({ _id }, (err) => {
    if (err) throw new BadRequest(400, 'Task is not find')
    res.status(200).send({'success':true,'message':'Task delete successfully'})
  })
}

// Add comments to current task
const addComment = (req, res) => {
  console.log('req.body ===>', req.body)
  console.log('req.params ===>', req.params )
  const { _id } = req.params
  console.log()
  const task = Task.findByIdAndUpdate({ _id }, {$push: {comments: req.body.comment}}, {new: true, safe: true, upsert: true}, (err, task) => {
    console.log('task ===>', task)
    if (err) throw new NotAcceptable(405, 'Comment is invalid')
    res.status(200).send({'success':true, 'message': 'Comment add successfuly', task})
  })
}

module.exports = {
  getTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
  addComment
}