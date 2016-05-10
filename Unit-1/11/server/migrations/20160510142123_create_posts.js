
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments();
    table.string('title');
    table.string('author');
    table.string('image_url');
    table.text('description');
    table.integer('votes').defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.integer('author_id')
         .unsigned()
         .notNull()
         .references('id')
         .inTable('users')
         .onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
