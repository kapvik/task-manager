const mongoose = require('mongoose'),
      { EMAIL } = require('../../utils'),
      bcrypt = require('bcrypt'),
      SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema
const schema = new Schema(
  {
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
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    admin: {
      type: Boolean,
      require: true,
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
      type: String,
      required: true,
      default: ['super', 'lazy', 'for', 'this', 'field']
      },
    tasks: [Schema.Types.Mixed]
  }
)

// // Execute before each user.save() call
schema.pre('save', function(next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

schema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
module.exports = { schema }