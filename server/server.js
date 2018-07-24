// import dependencies…
import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import path from 'path';

import User from './models/User'

// import routes
import userRoutes from './routes/user.server.route';

// create instances
const app = express()
const router = express.Router()

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// set the port
const API_PORT = process.env.API_PORT || 3001

app.use('/api', userRoutes);

app.get('/', (req,res) => {
  return res.end('Api working');
})

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