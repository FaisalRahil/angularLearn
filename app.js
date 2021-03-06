var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var i18n = require('i18n');
var hbs = require('hbs');
var cons = require('consolidate');

var routes = require('./routes/index');
var users = require('./routes/users');
var pages = require('./routes/pages');

var app = express();


// minimal config
i18n.configure({
  locales: ['en', 'ar'],
  cookie: 'locale',
  directory: __dirname + '/locales'
});

var config = require('./config'); // get our config file

var options = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  user: config.user,
  pass: config.password
}
mongoose.Promise = Promise;
mongoose.connect(config.url, options);

// view engine setup
app.engine('html', require('ejs').renderFile);
// app.engine('hbs', hbs.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(i18n.init);
app.use('/', routes);
app.use('/users', users);
app.use('/pages', pages);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
