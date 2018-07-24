const express = require('express');


const router = express.Router();
router.post('/auth',
passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/auth',
                                   failureFlash: true })
);