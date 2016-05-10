
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.string('text');
    table.integer('author_id').notNull().unsigned().references('id').inTable('users').onDelete('cascade');
    table.integer('post_id').notNull().unsigned().references('id').inTable('posts').onDelete('cascade');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
