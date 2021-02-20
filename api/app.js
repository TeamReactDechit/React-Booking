const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require("body-parser");
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();
const app = express();


// models
const models = require("./models");

// routes
const prenotationsRouter = require('./routes/prenotations');
const locationsRouter = require('./routes/locations');
const indexRouter = require('./routes/index');
const testAPIRouter = require('./routes/testAPI');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const pdfAPIRouter = require('./routes/pdfAPI');

// Database synchronization
models.sequelize.sync().then(function() {
  console.log('connected to database')
}).catch(function(err) {
  console.log(err)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// modules configurations
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// routes handler
app.use('/', indexRouter);
app.use('/testAPI', testAPIRouter);
app.use('/api', usersRouter);
app.use('/api', authRouter);
app.use('/api', prenotationsRouter);
app.use('/api', locationsRouter);
app.use('/api', pdfAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
