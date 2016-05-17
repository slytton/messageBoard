var express = require('express');
var router = express.Router();
var knex = require('../db/config');
var queries = require('../lib/');

function authenticated(req, res, next){
  if(req.user) return next();
  res.status(400).send({errors:["You are not authorized to do that :("]})
}


// Get all posts
router.get('/', function(req, res, next) {
  var userId = req.user ? req.user.id : null;
  queries.getPostsWithUserAndComments(userId).then(function(posts){
    if (req.user) {
      posts.forEach(function(post){
        post.deleteable = post.author.id === req.user.id;
        post.comments.forEach(function(comment){
          comment.deleteable = comment.author.id === req.user.id;
        })
      });
      console.log(posts);
      var promises = posts.map(function(post){
        return knex('favorites')
          .where({post_id: post.id, user_id: req.user.id})
          .first()
          .then(function(dbPost){
            //console.log(dbPost);
            if(dbPost) post.favorite = true;
            return post;
          })
      })

      return Promise.all(promises);
    }else{
      return posts;
    }
  })
  .then(function(posts){
    res.json(posts);
  })
  .catch(function(err){
    console.log(err);
    res.json({errors: ['Unabel to get posts.']});
  })
});


// Add a post
router.post('/', authenticated, function(req, res, next) {
  var errors = []
  var post = {};

  if(!req.body.title) errors.push('Please include a title');
  if(!req.body.description) errors.push('Please include a description');
  if(!req.body.image_url) errors.push('Please include an image url.');
  if(errors.length > 0) return res.json({errors: errors});

  req.body.author_id = req.user.id;

  knex('posts').insert(req.body).returning("*")
    .then(function(posts){
      post = posts[0];
      post.comments = [];
      return knex('users').select('id', 'username').where('id', post.author_id).first();
    })
    .then(function(author){
      delete post.author_id
      post.author = author;
      post.deleteable = true;
      res.json(post);
    })
    .catch(function(err){
      console.log(err);
      res.json({errors:['Unable to add posts']});
    })
});

// Add a comment
router.post('/:id/comments', authenticated, function(req, res, next){
  var result = {};
  req.body.author_id = req.user.id;
  knex('comments').insert(req.body).returning('*').then(function(comments){
    result = comments[0];
    return knex('users').select('id', 'username').where('id', result.author_id).first();
  }).then(function(user){
    result.author = user;
    delete result.author_id;
    result.deleteable = true;
    res.json(result);
  })
});

// Update a post
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

// Delete a comment
router.delete('/:postId/comments/:commentId', authenticated, function(req, res, next){
  var postId = req.params.postId;
  var commentId = req.params.commentId;

  knex('comments')
    .where('author_id', req.user.id).pluck('id').then(function(ids){
      console.log(typeof ids);
      console.log(typeof commentId);
      console.log(ids.indexOf(+commentId) >= 0);
      if(ids.indexOf(+commentId) >= 0){
        console.log('deleting comment');
        knex('comments')
          .where('id', commentId)
          .del().then(function(){
            res.json(1)
          });
      }
    }).catch(function(err){
      console.log(err);
      res.status(400).send({errors: ['You cannot delete this post.']})
    })

});

// Delete a post
router.delete('/:id', authenticated, function(req, res, next){
  console.log(req.params.id);

  knex('posts')
  .where('author_id', req.user.id).pluck('id').then(function(ids){
    // console.log(typeof ids);
    // console.log(typeof req.params.id);
    // console.log(ids.indexOf(+req.params.id) >= 0);
    if(ids.indexOf(+req.params.id) >= 0){
      console.log('deleting post');
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

router.post('/:id/favorite', function(req, res, next){
  knex('favorites')
    .insert({post_id: req.params.id, user_id: req.user.id})
    .then(function(){
      res.json({})
    })
    .catch(function(){
      res.status(400).send({errors: ['Your request could not be processed.']})
    })
});

router.post('/:id/unfavorite', function(req, res, next){
  knex('favorites')
    .where({post_id: req.params.id, user_id: req.user.id})
    .delete()
    .then(function(){
      res.json({})
    })
    .catch(function(){
      res.status(400).send({errors: ['Your request could not be processed.']})
    })
});


module.exports = router;
