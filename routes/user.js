var express = require('express');
var router = express.Router();
var shortid = require("shortid");
var bodyParser = require("body-parser");
var notes = require("./notes.js");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
/* GET users listing. */
router.get('/', function(req, res, next) {
  const id = shortid.generate();
  res.render('user',{ title: 'Quiz',id:id});

});
router.get('/:id/answer', function(req, res, next) {

  res.render('answer',{ title: 'Quiz'});

}).post('/:id/answer',urlencodedParser,function(req,res,next){
    notes.createNote(req.params.id,req.body.name,req.body.answer);
    res.render('submit');
});
router.get('/:id/api', function(req, res, next) {
  var answers = notes.displayNote(req.params.id);
  res.json(answers);

});
router.get('/:id', function(req, res, next) {
  res.render('display',{ title:'Quiz',id:`${req.params.id}`});

});

module.exports = router;
