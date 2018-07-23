import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CommentsSchema = new mongoose.Schema(
  {
    _id: Schema.Types.ObjectId,
    from: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    msg:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    task: {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }
  }
)


// export module to use in server.js
export default mongoose.model('Comments', CommentsSchema)