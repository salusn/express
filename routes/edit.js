var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
assert = require('assert');
var url = 'mongodb://localhost:27017/formdb';


router.get('/edit/:id', function(req, res, next) {

// MongoClient.connect(url, function(err, db) {	
//   console.log(req.params.id)
//    var id = req.params.id;
//   formdata.find({:id}, function(err, docs){
// // collection.find(condition ,function(err, companies) {
// //     companies.each(function(err, company){
// //         //do smth with found
// //     });

//   //	db.collection('formdata').find(req.params.id).toArray(function(err, docs){
// 			if(err) res.json(err);
// 			else    
// console.log(docs)

// 				res.render('edit', {_id: req.params.id});
// 		});	

//   //res.render('edit', {_id: req.params.id});
// })
res.render('edit', {id: req.params.id});
});

module.exports = router;
