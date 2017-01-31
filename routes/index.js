var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Galvanize Reads', logo:"images/tux.png" });
});

module.exports = router;
