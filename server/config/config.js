require('dotenv').config();

let CONFIG = {}

CONFIG.app             = process.env.APP            || 'dev';
CONFIG.port            = process.env.PORT           || '3001';
CONFIG.mongoUrl		   = process.env.MONGO_URL      || 'mongodb://127.0.0.1:27017/test'
CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'SOME SECRET TOKEN';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

module.exports = CONFIG;