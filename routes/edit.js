var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
assert = require('assert');
var url = 'mongodb://localhost:27017/formdb';

router.get('/edit/:id', function(req, res, next) {

	MongoClient.connect(url, function(err, db) {	
		var id = req.params.id;
		var collection = db.collection('formdata');
		var o_id = new ObjectID(id);

		collection.find({_id:o_id}).toArray(function(err, docs){
        	res.render('edit', {data: docs});
   		});		
	});
});

router.post('/edit/:id', function(req, res) {
    console.log(req.params.id);
    res.redirect('/')
	MongoClient.connect(url, function(err, db) {
	})
});	

module.exports = router;
