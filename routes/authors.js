"use strict";

var express = require("express");
var router = express.Router();
var knex = require('../db/knex');


router.get("/", function(req, res) {
  knex('authors')
    .select()
    .orderBy("last", "asc")
    .then(function(answer) {
        res.render("authors", {
          first: "first",
          last: "last",
          bio: "bio",
          portrait: "portrait",
          data: answer
        });
    });
});









module.exports = router;
