var express = require('express');
var router = express.Router();
var url = require('url');


// router.get('/').get(function(req, res, next){
// 	console.log(req);
// 	//res.render('edit', {_id: req._id});
// })



router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.use('/edit/:_id', function(req, res, next) {
  // ..
  res.render('edit', {_id: req._id});
});

module.exports = router;
