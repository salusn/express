var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/formdb';



router.get('/', function(req, res){

MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('formdata').find();

    cursor.each(function(err, doc) {
 console.log(doc)
      res.render('success', {
    data: doc
  });
 
    });

}); 

  
});

module.exports = router;
