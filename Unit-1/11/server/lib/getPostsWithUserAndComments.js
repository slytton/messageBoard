var knex = require('../db/config.js')
var queries = require('./');

module.exports = getSinglePostWithUserAndComments

function getSinglePostWithUserAndComments() {
  return knex('posts').select('posts.id', 'posts.title', 'posts.author_id',
                              'posts.description', 'posts.votes', 'posts.image_url',
                              'users.username')
                      .innerJoin('users', 'users.id', 'posts.author_id')
                      .then(function(posts){
    var postPromises = posts.map(function(post){
      post.author = {id: post.author_id, username: post.username}
      delete post.author_id;
      delete post.username;
      return queries.getPostCommentsWithUser(post.id).then(function(comments){
        post.comments = comments;
        return post;
      })
    })
    return Promise.all(postPromises);
  });
}


// title:       'Zany Birds',
// image_url:       'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg',
// description: "A very long description about nothing.",
// votes:       0
