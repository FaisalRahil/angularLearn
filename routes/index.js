var express = require('express');
var router = express.Router();
var helpers = require('../controllers/helpers');


/* GET home page. */
router.get('/', function(req, res, next) {
  helpers.setlang(req,res);
  res.render('index', { title: 'Welcome to Traveller' });
});

/* GET home page. */
router.get('/:locale', function(req, res) {
  helpers.setdeflan(req,res);
  res.redirect('/');
});

module.exports = router;
