var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('fun', {
    image: "images/paper.png"
  });
});

module.exports = router;
