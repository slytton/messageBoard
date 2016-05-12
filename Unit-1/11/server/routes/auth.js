var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var router = express.Router();
require('dotenv').load();
var knex = require('../db/config');

router.post('/signup', function(req, res, next) {
  var newUser = req.body;
  var errors = [];

  if(!newUser.username) errors.push('please enter a username');
  if(!newUser.password) errors.push('please enter a password');
  if(errors.length > 0) return res.status(400).send({errors: errors});

  var password = bcrypt.hashSync(newUser.password, 10);
  knex('users').insert({username: newUser.username, password: password})
               .returning('*')
               .then(function(users){
    var userId = {userId: users[0].id}
    var token = jwt.sign(userId, process.env.JWT_SECRET, {expiresIn: '2d'})
    console.log(token);
    res.json({token: token});
  }).catch(function(err){
    console.log(err);
    res.status(400).send({errors: ['please select a different username']});
  })

});

router.post('/login', function(req, res, next) {
  var user = req.body;
  var errors = [];

  if(!user.username) errors.push('please enter a username');
  if(!user.password) errors.push('please enter a password');
  if(errors.length > 0) return res.status(400).send({errors: errors});

  var password = bcrypt.hashSync(user.password, 10);
  knex('users').insert({username: user.username, password: password})
               .returning('*')
               .then(function(users){
    var userId = {userId: users[0].id}
    var token = jwt.sign(userId, process.env.JWT_SECRET, {expiresIn: '2d'})
    console.log(token);
    res.json({token: token});
  }).catch(function(err){
    res.status(400).send({errors: ['You have entered an invalid username or password']});
  })
});

router.get('/me', function(req, res, next){
  var token = req.headers.authentication;
  var decoded = jwt.verify(token, process.env.JWT_SECRET);

  knex('users').where({id: decoded.userId}).first().then(function(user){
    delete user.password;
    res.json(user);
  })
})

module.exports = router;
