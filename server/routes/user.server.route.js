const express = require('express');

//import controller file
const userController = require('../controllers/user.server.controller');

// get an instance of express router
const router = express.Router()
router.route('/users')
  .get(userController.getUsers)

router.route('/user/:_id')
  .get(userController.getUser)
  .put(userController.updateUser)

module.exports = router
