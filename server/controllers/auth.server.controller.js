const mongoose = require('mongoose');
const { NotAcceptable, BadRequest } = require('rest-api-errors');
const { PASSWORD } = require('../utils');
const { authenticate, generateAccessToken } = require('../middleware');
const passport = require('passport');

//import models
const { User } = require('../models/user');

//Check if the user exists in database
const signIn = (req, res) => {
    console.log('sign in start ==>', req.body)
    // passport.authenticate('local')

  const { token, user } = req;
    if (!user) {
      throw new Error();
    }
    return res.status(200).send({'success':true,'message':'Sign In is successfull', user, token})    
} 

const signUp = (req, res, next) => {
    console.log('registering user')
	const { email, password, username } = req.body;

	if (!PASSWORD.test(password)) {
    	return next(new NotAcceptable(406, 'Password is in wrong format.'));
    }

	const user = new User({
		email: email,
		username: username
	})
    console.log('user ==>', user,'password ==>', req.body)
    User.register(user, password, (err, user) => {
    	if(err) {
            console.log('err while user register', err)
    		return next(err)
    	}
        const token = generateAccessToken;
        console.log('user registered')
        res.status(200).send({'success':true,'message':'Register is successfull', user})
    	
        // return next()
    })

}

const signOut = (req, res) => {
	req.logOut();
	res.status(200).send({'success':true,'message':'Log out is successfull'})
}

module.exports = {
	signIn,
	signUp,
	signOut
}