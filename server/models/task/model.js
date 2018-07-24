const mongoose = require('mongoose');
const { schema } = require('./schema');
const Task = mongoose.model('Task', schema);


module.exports = { Task };