const { Unauthorized } = require('rest-api-errors');
const { User } = require('../models/user');
const { authenticate, generateAccessToken } = require('../middleware');

// const localAuth = (req, email, password, done) => {
const localAuth = (username, password, done) => {
console.log('username ===>', username)
console.log('password ===>', password)
  // User.findOne({ email: email })
  User.findOne({ email: username })
    .then(user => {
      if (!user) {
        return done(new Unauthorized(401, 'Incorrect username or.'), false);
      }

      return user.authenticate(password, err => {
        if (err) {
          return done(new Unauthorized(401, 'Incorrect or password.'), false);
        }
        return done(null, user);
      });
    })
    .catch(done);
}

module.exports = { localAuth };