var express = require('express');
var router = express.Router();
var knex = require('../db/config');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json();
});

module.exports = router;
