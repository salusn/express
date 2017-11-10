var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
assert = require('assert');
var url = 'mongodb://localhost:27017/formdb';


router.get('/delete/:id', function(req, res, next) {
console.log("dds")
	MongoClient.connect(url, function(err, db) {	
		var id = req.params.id;
		var collection = db.collection('formdata');
		var o_id = new ObjectID(id);

		collection.remove({_id:o_id});		
	});
	 res.redirect('/success')
});

module.exports = router;
