const mongoose = require('mongoose');
const { NotAcceptable, BadRequest } = require('rest-api-errors');
const jwt = require('jsonwebtoken');

//import models
const { User } = require('../models/user');

// Receive all users
const getUsers = (req, res) => {
  const users = User.find({}, (err, users) => {
    if (err) {
      throw new Error(err)
    }
  res.status(200).json({'success':true,'message':'Users fetched successfully', users})
  })
}

// Receive profile current user 
const getUser = (req,res) => {
  const token = req.params.token
console.log('token ===>', token)
console.log('token trim ===>', token)
  const userId = jwt.decode(token)
console.log('userId ===>', userId)
  const user = User.findById(userId.id, (err, user) => {
console.log('user ===>', user)
    if (err) {
      throw new BadRequest(400, 'User is not found')
    }
  res.status(200).json({ 'success':true,'message':'User fetched successfully', user })
  })
}

// Change current user info 
const updateUser = (req,res) => {
  const { _id } = req.params
  const user = User.findOne({ _id }, (err, user) => {
    if (err) {
      throw new BadRequest(400, 'User not find')
    }
  })
  Object.assign({}, user, req.body)
  user.save()
  res.status(200).json({'success':true,'message':'Updated successfully',user})
 }

module.exports = {
  getUsers,
  getUser,
  updateUser
}