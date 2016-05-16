
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('favorites').del()
  ).then(function(){
    return Promise.join(
      // Inserts seed entries
      insertByUserAndPost('Bob', 'Zany Birds'),
      insertByUserAndPost('Bob', 'Running Hampsters'),
      insertByUserAndPost('Steve', 'Zany Birds'),
      insertByUserAndPost('Dave', 'Running Hampsters'),
      insertByUserAndPost('Steve', 'Basket Bike')
    )
  });

  function insertByUserAndPost(userName, postTitle){
    var favorite = {};
    return knex('users').where('username', userName).first().then(function(user){
      favorite.user_id = user.id;
      return knex('posts').where('title', postTitle).first();
    }).then(function(post){
      favorite.post_id = post.id;
      return knex('favorites').insert(favorite);
    })
  }
};
