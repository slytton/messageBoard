var express = require('express');
var knex = require('../db/config');
var router = express.Router();
/* GET pirates */
router.get('/', function(req, res, next) {
  knex('pirates').then(function(pirates){
    res.json(pirates);
  })
});


router.post('/', function(req, res, next) {
  var pirate = req.body;
  knex('pirates').insert(pirate).returning('*').then(function(pirate){
    res.json(pirate[0]);
  })
});

module.exports = router;
