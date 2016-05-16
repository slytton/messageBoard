exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', function(table){
    table.increments();
    table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('cascade');
    table.integer('post_id').unsigned().notNullable().references('id').inTable('posts').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorites');
};
