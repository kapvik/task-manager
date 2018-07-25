const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema(
  {
    _id: ObjectId,
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      validate: {
        validator: email => EMAIL.test(email),
        message: 'Invalid email address'
      },
      required: true,
      default: 'john.dow@example.com'
    },
    password: {
      type: String,
      required: true
    },
    profile: {
      admin: {
        type: Boolean,
        default: false
      },
      firstname:{
        type: String,
        required: true,
        default: 'John'
      },
      lastname: {
        type: String,
        required: true,
        default: 'Doe'
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
  }
)

module.exports = { schema }