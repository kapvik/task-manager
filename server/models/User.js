const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    firstname: String,
    lastname: String,
    email: String,
    dateOfBirth: Date,
    skills: {
    	type: [String]
    }
  }
)



module.exports = mongoose.model('User', UserSchema)