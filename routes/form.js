var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
assert = require('assert');
var url = 'mongodb://localhost:27017/formdb';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Form' });
});

router.post('/', function(req, res) {

	var firstname = req.body.firstname;
		lastname = req.body.lastname;	        
	MongoClient.connect(url, function(err, db) {
	  if (err) return
	assert.equal(null, err);
	  var collection = db.collection('formdata')
	  collection.insert({firstname: firstname, lastname: lastname}, function(err, result) {

	     if(result){
	     	res.redirect('success')
	 
	     }
	  })
	})
});

module.exports = router;
