const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const CONFIG = require('../config/config');

const authenticate = expressJwt({ secret: CONFIG.jwt_encryption });

const generateAccessToken = (req, res, next) => {
  req.token = jwt.sign({ id:req.user._id }, CONFIG.jwt_encryption, {
    expiresIn: CONFIG.jwt_expiration
  });
  next();
};

const decodeAccessToken = (token) => {
	const decoded = jwt.decode(token)
	return decoded
}

module.exports =  {
  authenticate,
  generateAccessToken,
  decodeAccessToken
};