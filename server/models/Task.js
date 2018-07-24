import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TaskSchema = new mongoose.Schema(
  {
    _id: Schema.Types.ObjectId,
    short_description: {
      type: String
    },
    title:{
        type: String,
        required: true
    },
    full_description: {
        type: String,
        required: true
    },
    status: {
      type: String,
      enum: ['To Do', 'Peer Review', 'Done', 'In Progress']
      required: true
    },
    performer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  }
)


// export module to use in server.js
export default mongoose.model('Task', TaskSchema)