
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments').del()
  ).then(function(){
    return Promise.join(
      // Inserts seed entries
      insertByUserAndPost('Bob', 'Zany Birds', {text:"Hi, my name is Bob"}),
      insertByUserAndPost('Steve', 'Zany Birds', {text: "Hi Bob, my name is Steve"}),
      insertByUserAndPost('Dave', 'Running Hampsters', {text: "This is Dave, hello!"}),
      insertByUserAndPost('Steve', 'Basket Bike', {text: "This is Steve on basket bike post."})
    )
  });

  function insertByUserAndPost(userName, postTitle,  comment){
    return knex('users').where('username', userName).first().then(function(user){
      comment.author_id = user.id;
      return knex('posts').where('title', postTitle).first();
    }).then(function(post){
      comment.post_id = post.id;
      return knex('comments').insert(comment);
    })
  }

};
