var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var router = express.Router();
require('dotenv').load();
var knex = require('../db/config');

router.get('/', function(req, res, next){
  var host = req.protocol+'://'+req.get('host')+'/api/v1/'+'auth/';
  res.json({
    signup: {
      link: host + 'signup',
      methods: [
        'POST'
      ]
    },
    loging: {
      link: host + 'login',
      methods: [
        'POST'
      ]
    }
  })
})

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
    var token = jwt.sign(userId, process.env.JWT_SECRET, {expiresIn: '2d'});
    console.log(token);
    res.json({token: token});
  }).catch(function(err){
    console.log(err);
    res.status(400).send({errors: ['please select a different username']});
  })

});

router.post('/login', function(req, res, next) {
  console.log('test');
  var user = req.body;
  var errors = [];

  console.log(user);
  if(!user.username) errors.push('please enter a username');
  if(!user.password) errors.push('please enter a password');
  if(errors.length > 0) return res.status(400).send({errors: errors});

  knex('users').where('username', user.username)
    .first()
    .then(function(dbUser){
      console.log(dbUser);
      if(bcrypt.compareSync(user.password, dbUser.password)){
        var token = jwt.sign({userId: dbUser.id}, process.env.JWT_SECRET, {expiresIn: '2d'});
        console.log(token);
        res.json({token: token});
      }else{
        return Promise.reject('invalid password');
      }
  }).catch(function(err){
    console.log(err);
    res.status(400).send({errors: ['You have entered an invalid username or password']});
  })
});

router.get('/me', function(req, res, next){
  if (req.user) {
    res.json(req.user)
  }else{
    res.status(200).send({});
  }
})

module.exports = router;
