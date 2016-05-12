var express = require('express');
var router = express.Router();
var knex = require('../db/config');
var queries = require('../lib/');

/* GET home page. */
router.get('/', function(req, res, next) {
  queries.getPostsWithUserAndComments().then(function(posts){
    res.json(posts);
  }).catch(function(err){
    console.log(err);
    res.json({errors: ['Unabel to get posts.']});
  })
});

router.post('/', function(req, res, next) {
  var errors = []
  var post = {};

  if(!req.body.title) errors.push('Please include a title');
  if(!req.body.description) errors.push('Please include a description');
  if(!req.body.image_url) errors.push('Please include an image url.');
  if(errors.length > 0) return res.json({errors: errors});

  knex('posts').insert(req.body).returning("*")
    .then(function(posts){
      post = posts[0];
      post.comments = [];
      return knex('users').select('id', 'username').where('id', post.author_id).first();
    })
    .then(function(author){
      delete post.author_id
      post.author = author;

      res.json(post);
    })
    .catch(function(err){
      console.log(err);
      res.json({errors:['Unable to add posts']});
    })
})

router.post('/:id', function(req, res, next){
  var toUpdate = {
    title: req.body.title,
    description: req.body.description,
    votes: req.body.votes
  }

  knex('posts').where('id', req.params.id).update(toUpdate).returning("*").then(function(posts){
    console.log(posts);
    res.json(posts[0]);
  });
})

router.post('/:id/comments', function(req, res, next){
  var result = {};
  knex('comments').insert(req.body).returning('*').then(function(comments){
    result = comments[0];
    return knex('users').select('id', 'username').where('id', result.author_id).first();
  }).then(function(user){
    result.author = user;
    delete result.author_id;
    res.json(result);
  })
})

module.exports = router;
