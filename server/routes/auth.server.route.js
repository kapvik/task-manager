const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { authenticate, generateAccessToken } = require('../middleware');

//import controller file
const authController = require('../controllers/auth.server.controller');

const router = express.Router();

router.post('/sign-in', 
    // passport.authenticate('local'),
    authController.signIn)


router.route('/sign-up')
    .post(
        authController.signUp,
        // passport.authenticate('local', {
    	   // successRedirect: '/',
    	   // failureRedirect: '/sign-up',
    	   // session: false,
    	   // scope: []
        // }),
    	// generateAccessToken,
    	// authController.signIn
    )
router.route('/sign-out')
    .post(authenticate, authController.signOut)

module.exports = router