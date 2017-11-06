var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/formdb';



router.get('/', function(req, res){

MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('formdata').find();

    cursor.each(function(err, doc) {
 //res.json(doc.firstname);
 // var x =res.json(doc);
 //      res.render('success', {
 //    data: x
 //  });
  var arr = Object.keys(doc).map(function(k) { 

    if(doc === null) {return null}
  	else 
console.log(doc[k])
  		//return obj[k] 
  	});

    });

}); 

  
});

module.exports = router;
