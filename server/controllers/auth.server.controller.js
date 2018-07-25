const mongoose = require('mongoose');
const { NotAcceptable, BadRequest } = require('rest-api-errors');
const { PASSWORD } = require('../utils');

//import models
const { User } = require('../models/user');

//Check if the user exists in database
const signIn = (req, res) => {
  const { token, user } = req;
    if (err) {
      throw new Error(err);
    }
    res.status(200).send({'success':true,'message':'Sign In is successfull', user})    
} 

const signUp = (req, res, next) => {
	const { email, password, username } = req.body;

	if (!PASSWORD.test(password)) {
    	return next(new NotAcceptable(406, 'Password is in wrong format.'));
    }

	const user = new User({
		email,
		username
	})

    User.register(user, password, (err, user) => {
    	if(err) {
    		return next(err)
    	}
    	return next()
    })

}

const signOut = (req, res) => {
	req.logOut();
	res.status(200).send({'success':true,'message':'Register is successfull'})
}

module.exports = {
	signIn,
	signUp,
	signOut
}