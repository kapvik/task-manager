import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema(
  {
    _id: Schema.Types.ObjectId,
    admin: {
      type: Boolean,
      default: false
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    firstname:{
        type: String,
        required: true,
        default: 'John'
    },
    lastname: {
        type: String,
        required: true,
        default: 'Dow'
    },
    email: {
      type: String,
      validate: {
        validator: function(v) {
            return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(v)
        },
        message: 'Invalid email address'
      },
      required: true,
      default: 'john.dow@example.com'
    },
    dateOfBirth: {
        type: Date,
        required: true,
        default: '12/01/90'
    },
    skills: {
    	type: [String],
      required: true,
      default: ['super', 'lazy', 'for', 'this', 'field']
    }
  }
)


// export module to use in server.js
export default mongoose.model('User', UserSchema)