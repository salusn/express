var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
console.log(req._id)

      res.render('edit', {_id: req._id});

});



module.exports = router;
