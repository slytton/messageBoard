var express = require('express');
var router = express.Router();
var knex = require('../db/config');
var queries = require('../lib');

/* GET home page. */
router.get('/', function(req, res, next) {
  var host = req.protocol+'://'+req.get('host')+'/api/v1/';
  res.json({

    posts: {
      link: host + 'posts',
      methods: [
        'GET', 'POST'
      ]
    },

    auth: {
      link: host + 'auth',
      methods: [
      ]
    },
   })
});

module.exports = router;
