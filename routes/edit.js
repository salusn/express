var express = require('express');
var router = express.Router();
var url = require('url');


router.get('/', function(req, res){


//console.log(req.param(edit))
      res.render('edit', {_id: req._id});

});


module.exports = router;
