var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var knex = require('./db/config');

var api = require('./routes/api.js');
var posts = require('./routes/posts.js');
var comments = require('./routes/comments.js');
var auth = require('./routes/auth.js');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next){
  var token = req.headers.authentication;
  if(token){
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    knex('users').where({id: decoded.userId}).first().then(function(user){
      delete user.password;
      req.user = user;
      next();
    }).catch(function(err){
      console.log(err);
      next();
    })
  }else{
    next();
  }
})

app.use('/api/v1/', api);
app.use('/api/v1/posts', posts);
app.use('/api/v1/comments', comments);
app.use('/api/v1/auth', auth);

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
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
