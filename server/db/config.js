var knex = require('knex');
var config = require('../knexfile.js');

module.exports = knex(config['development']);
