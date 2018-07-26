const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models/user');
const { localAuth } = require('./local');


passport.use(
	new LocalStrategy({
	    usernameField: 'email',
	    passwordField: 'password',
	  	// passReqToCallback : true
  	}, localAuth)
);

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

passport.serializeUser(function(user, done) {
console.log('serializeUser', user)
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
	console.log('deserializeUser', user)
  User.findOne({ _id: id }, function(err, user) {
    done(err, user);
  });
});


module.exports = { passport };