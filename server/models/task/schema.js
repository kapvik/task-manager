const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  _id: Schema.Types.ObjectId,
  short_description: {
    type: String
  },
  title:{
      type: String,
      required: true,
      default: 'Task title'
  },
  full_description: {
    type: String,
    required: true,
    default: 'This is full description'
  },
  status: {
    type: String,
    enum: ['To Do', 'Peer Review', 'Done', 'In Progress'],
    required: true,
    default: 'To Do'
  },
  performer: {
    username: {
      type: String,
      required: true,
      default: 'Jane Doe'
    }
  },
  comments: [{
     _id: ObjectId,
    from: {
      type: String,
      required: true,
      default: 'John Doe'
    },
    msg:{
      type: String,
      required: true,
      default: 'message to task'
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    }
  }]
});

module.exports = { schema };