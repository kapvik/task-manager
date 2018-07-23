import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ChatSchema = new mongoose.Schema(
  {
    _id: Schema.Types.ObjectId,
    msgTo:{
      type: String,
      required: true
    },
    to: {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
)


// export module to use in server.js
export default mongoose.model('Chat', ChatSchema)