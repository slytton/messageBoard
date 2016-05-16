
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del()
  ).then(function(){
    return Promise.join(
      // Inserts seed entries
      insertWithAuthorName( 'Bob',
                           {title:       'Zany Birds',
                            image_url:       'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg',
                            description: "A very long description about nothing.",
                            votes:       0 }),
      insertWithAuthorName( 'Steve',
                           {title:       'Running Hampsters',
                            image_url:       'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701',
                            description: "A very long description about nothing.",
                            votes:       0 }),
      insertWithAuthorName( 'Dave',
                           {title:       'Basket Bike',
                            image_url:       'http://im.rediff.com/news/2015/dec/24tpoty20.jpg',
                            description: "Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles ",
                            votes:       0 })
    )
  });

  function insertWithAuthorName(authorName, post) {
    return knex('users').where('username', authorName).first().then(function(user){
      console.log(user);
      post.author_id = user.id;
      return knex('posts').insert(post);
    });
  }
};
