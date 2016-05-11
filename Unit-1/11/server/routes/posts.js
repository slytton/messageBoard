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
  if(!req.body.title) errors.push('Please include a title');
  if(!req.body.description) errors.push('Please include a description');
  if(!req.body.image_url) errors.push('Please include an image url.');
  if(errors.length > 0) return res.json({errors: errors});

  knex('posts').insert(req.body).returning("*")
    .then(function(posts){
      res.json(posts[0]);
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

module.exports = router;
