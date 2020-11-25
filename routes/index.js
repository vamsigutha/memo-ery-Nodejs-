var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Quiz' });

});
router.get('/about', function(req, res, next) {

  res.render('about');

});
router.get('/contact', function(req, res, next) {

  res.render('contact');

});
router.get('/privacypolicy', function(req, res, next) {

  res.render('privacypolicy');

});


module.exports = router;
