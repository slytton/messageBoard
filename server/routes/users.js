var express = require('express');
var router = express.Router();
var knex = require('../db/config');
var queries = require('../lib');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render({error: 'Route not yet available'})
});

module.exports = router;
