var knex = require('knex');
var config = require('../knexfile.js');
require('dotenv').config();

module.exports = knex(config[process.env.ENVIRONMENT]);
