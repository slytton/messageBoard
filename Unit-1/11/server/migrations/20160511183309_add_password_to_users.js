var bcrypt = require('bcrypt');

exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.string('password').notNull().defaultTo((function(){ return bcrypt.hashSync('password', 10) })());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.dropColumn('password');
  })
};
