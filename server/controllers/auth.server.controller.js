const mongoose = require('mongoose');
const { NotAcceptable, BadRequest } = require('rest-api-errors');
const { PASSWORD } = require('../utils');
const { authenticate, generateAccessToken } = require('../middleware');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//import models
const { User } = require('../models/user');

//Check if the user exists in database
const signIn = (req, res) => {
    console.log('sign in start ==>', req.body)
  const { email } = req.body;
  const token = req.token
  // const user = jwt.ve(token)
    if (!email) {
      throw new Error();
    }
    return res.status(200).send({'success':true,'message':'Sign In is successfull', 'email':email, 'token':token})    
} 

const signUp = (req, res, next) => {
    console.log('registering user')
    const { email, password, username } = req.body;
    const token = req.token

    if (!PASSWORD.test(password)) {
        return next(new NotAcceptable(406, 'Password is in wrong format.'));
    }

    // const token = generateAccessToken(req, res, next);
    // console.log("token ==> ", token)
    const user = new User({
        email: email,
        username: username
    })

    console.log('user ==>', user,'password ==>', req.body.password)
    User.register(user, password, (err, user) => {
        if(err) {
            console.log('err while user register', err)
            return next(err)
        }
        console.log('user registered')
        // res.status(200).send({'success':true,'message':'Register is successfull', 'user':user, 'token':token})
    	
        return next()
    })

}

module.exports = {
	signIn,
	signUp
}