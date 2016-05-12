var bcrypt = require('bcrypt');
var password = bcrypt.hashSync('password', 10);

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({username: 'Bob', password: password}),
    knex('users').insert({username: 'Steve', password: password}),
    knex('users').insert({username: 'Dave', password: password})
  )
};
