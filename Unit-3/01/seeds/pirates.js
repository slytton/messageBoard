
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({name: 'Anne Booney',
                            poison: 'Rum',
                            accessory: 'hot temper',
                            image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'}),
    knex('pirates').insert({name: 'Bob Booney',
                            poison: 'Rum',
                            accessory: 'vomit breath',
                            image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'}),
    knex('pirates').insert({name: 'Carl Booney',
                            poison: 'Vodka',
                            accessory: 'back sweat',
                            image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'})
  );
};
