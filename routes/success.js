var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/formdb';



router.get('/', function(req, res){

MongoClient.connect(url, function(err, db) {

db.collection('formdata').find().toArray(function(err, docs){

      if(err) throw err;

      res.render('success', {data: docs});

      db.close();

    });
}); 
  
});

module.exports = router;
