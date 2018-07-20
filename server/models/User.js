const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      index: true,
      unique: true
    },
    firstname: String,
    lastname: String,
    email: String,
    dob: Date,
    skills: {
    	type: [String]
    }

  }
)



module.exports = mongoose.model('User', UserSchema)