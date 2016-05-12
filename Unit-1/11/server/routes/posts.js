var express = require('express');
var router = express.Router();
var knex = require('../db/config');
var queries = require('../lib/');

function authenticated(req, res, next){
  if(req.user) return next();
  res.status(400).send({errors:["You are not authorized to do that :("]})
}

router.get('/', function(req, res, next) {
  queries.getPostsWithUserAndComments().then(function(posts){
    if (req.user) {
      posts.forEach(function(post){
        post.deleteable = post.author.id === req.user.id;
      })
    }
    res.json(posts);
  }).catch(function(err){
    console.log(err);
    res.json({errors: ['Unabel to get posts.']});
  })
});


router.post('/', authenticated, function(req, res, next) {
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
});

router.post('/:id', authenticated, function(req, res, next){
  var toUpdate = {
    title: req.body.title,
    description: req.body.description,
    votes: req.body.votes
  }

  knex('posts').where('id', req.params.id).update(toUpdate).returning("*").then(function(posts){
    console.log(posts);
    res.json(posts[0]);
  });
});

router.post('/:id/comments', authenticated, function(req, res, next){
  var result = {};
  knex('comments').insert(req.body).returning('*').then(function(comments){
    result = comments[0];
    return knex('users').select('id', 'username').where('id', result.author_id).first();
  }).then(function(user){
    result.author = user;
    delete result.author_id;
    res.json(result);
  })
});

router.delete('/:id', authenticated, function(req, res, next){
  console.log(req.params.id);

  knex('posts')
    .where('author_id', req.user.id).pluck('id').then(function(ids){
      // console.log(typeof ids);
      // console.log(typeof req.params.id);
      // console.log(ids.indexOf(+req.params.id) >= 0);
      if(ids.indexOf(+req.params.id) >= 0){
        console.log('deleting');
        knex('posts')
          .where('id', req.params.id)
          .del().then(function(){
            res.json(1)
          });
      }
    }).catch(function(err){
      console.log(err);
      res.status(400).send({errors: ['You cannot delete this post.']})
    })

});

module.exports = router;
