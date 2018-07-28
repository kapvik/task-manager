const mongoose = require('mongoose');
const CONFIG   = require('./config/config');
const { User } = require('./models/user');


mongoose.connect(CONFIG.mongoUrl).then(() => {
	const coolGuy = new User({
		username: 'admin',
		email: 'cool-guy@only.one.com',
		password: '1234',
		admin: true,
		firstname: 'admin',
		lastname: 'admin'		
	})
	coolGuy.save().then(() => {
		console.log('Admin is created')
		process.exit(0)
	})
})