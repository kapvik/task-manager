const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  short_description: {
    type: String,
    required: true,
    trim: true
  },
  title:{
      type: String,
      required: true,
      trim: true,
      default: 'Task title'
  },
  full_description: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['To Do', 'Peer Review', 'Done', 'In Progress'],
    default: 'To Do'
  },
  performer: {
    username: {
      type: String
    }
  },
  comments: [{
    from: {
      type: String,
      required: true,
      trim: true
    },
    msg:{
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    }
  }]
});

schema.pre('save', function(next) {

  const task = this;

  next()
});
module.exports = { schema };