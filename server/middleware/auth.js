const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const CONFIG = require('../config/config');

const authenticate = expressJwt({ secret: CONFIG.jwt_encryption });

const generateAccessToken = (req, res, next) => {
  req.token = req.token || {};
  req.token = jwt.sign({ id:user._id }, CONFIG.jwt_encryption, {
    expiresIn: CONFIG.jwt_expiration
  });
  next();
};

module.exports =  {
  authenticate,
  generateAccessToken
};