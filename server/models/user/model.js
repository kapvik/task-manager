const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { schema } = require('./schema');

schema.plugin(passportLocalMongoose);

const User = mongoose.model('User', schema, 'users');
module.exports = { User };