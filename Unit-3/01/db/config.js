var knex = require('knex');
module.exports = knex(require('../knexfile.js')['development']);
