var express = require('express');
var router = express.Router();
var url = require('url');

router.get('/edit/:id', function(req, res, next) {
  console.log(req.params.id)
  res.render('edit', {_id: req.params.id});
});

module.exports = router;
