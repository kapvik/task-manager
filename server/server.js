// import dependencies…
const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose');
const path = require('path');
const { passport } = require('./passport');

// import routes
const userRoutes = require('./routes/user.server.route');
const taskRoutes = require('./routes/task.server.route');

// create instances
const app = express()

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// configure app
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Authorization
// app.use(passport.initialize());

// set the port
const API_PORT = process.env.API_PORT || 3007

app.use('/', userRoutes);
app.use('/', taskRoutes);

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// connect to database
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://127.0.0.1:27017/test')
mongoose.connection.once('connected', function() {
	console.log('Database connected successfully')
})

// start the server
app.listen(API_PORT,() => {
  console.log(`App Server Listening at ${API_PORT}`);
});