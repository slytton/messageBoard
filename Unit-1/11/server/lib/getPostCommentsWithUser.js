var knex = require('../db/config.js');

module.exports = getPostCommentsWithUser


function getPostCommentsWithUser(postId) {
  return knex('comments').select('comments.text', 'comments.id', 'comments.author_id',
                                 'comments.created_at', 'users.username')
                         .where('post_id', postId)
                         .innerJoin('users', 'users.id', 'comments.author_id')
                         .then(function(comments){
    return comments.map(function(comment){
      comment.author = {id: comment.author_id, username: comment.username}
      delete comment.author_id;
      delete comment.username;
      return comment;
    })
  });
}
