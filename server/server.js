// import dependencies…
const express      = require('express');
const bodyParser   = require('body-parser')
const logger       = require('morgan')
const mongoose     = require('mongoose');
const path 		   = require('path');
const { passport } = require('./passport');
const CONFIG       = require('./config/config');

// import routes
const userRoutes = require('./routes/user.server.route');
const taskRoutes = require('./routes/task.server.route');
const authRoutes = require('./routes/auth.server.route');

// create instances
const app = express()

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Authorization with Passport
app.use(passport.initialize());

app.use('/', userRoutes);
app.use('/', taskRoutes);
app.use('/', authRoutes);

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// connect to database
mongoose.Promise = global.Promise;
const db = mongoose.connect(CONFIG.mongoUrl)
mongoose.connection.once('connected', function() {
	console.log('Database connected successfully')
})


// start the server
app.listen(CONFIG.port,() => {
  console.log(`App Server Listening at ${CONFIG.port}`);
});