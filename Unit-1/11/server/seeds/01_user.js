exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({username: 'Bob'}),
    knex('users').insert({username: 'Steve'}),
    knex('users').insert({username: 'Dave'})
  )
};
