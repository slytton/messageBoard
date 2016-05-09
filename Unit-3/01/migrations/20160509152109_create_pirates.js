
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', function(table){
    table.string('name').notNull();
    table.string('poison').notNull();
    table.string('accessory').notNull();
    table.string('image_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates');
};
