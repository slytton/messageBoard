var knex = require('knex');
var config = require('../knexfile.js');

return knex(config['development']);
