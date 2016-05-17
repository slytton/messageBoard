var knex = require('../db/config.js')
var queries = require('./');

module.exports = getSinglePostWithUserAndComments

function getSinglePostWithUserAndComments(userId) {
  var results = [];
  
  return knex('posts')
    .select('posts.id', 'posts.title', 'posts.author_id',
            'posts.description', 'posts.votes', 'posts.image_url',
            'posts.created_at', 'users.username')
    .innerJoin('users', 'users.id', 'posts.author_id')
    .joinRaw('LEFT JOIN favorites on favorites.post_id=posts.id and favorites.user_id=?', userId)
    .then(function(posts){
      console.log(posts);
      results.posts = posts
      return queries.getCommentsWithUser();
    })
    .then(function(comments){

      var posts = results.posts;

      var indexedPosts = posts.reduce(function(prev, post){
        post.author = {id: post.author_id, username: post.username}
        delete post.author_id;
        delete post.username;
        prev[post.id] = post;
        return prev;
      }, {})

      comments.forEach(function(comment){
        var post = indexedPosts[comment.post_id];
        post.comments ? post.comments.push(comment) : post.comments = [comment];
      })

      return posts;
    })
    //return Promise.all(postPromises);
  // });
}


// title:       'Zany Birds',
// image_url:       'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg',
// description: "A very long description about nothing.",
// votes:       0
