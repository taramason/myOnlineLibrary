var express = require('express');
var router = express.Router();
var knex = require('../db/knex');



/* GET home page. */
// router.post('/', function(req, res, next) {
//   console.log("Hello, we're in addBookToTable")
//   console.log("Wreck.body", req.body);
//   knex('books')
//     .insert({
//       title: req.body.objTitle,
//       genre: req.body.objGenre,
//       cover: req.body.objImg,
//       description: req.body.objDescr
//     })
//     .then(function() {
//       res.send("books");
//       res.redirect(`add/${id}`);
//     })
//     // .finally(function() {
//     // });
//
//
// });

module.exports = router;
