"use strict";

var express = require("express");
var router = express.Router();
var knex = require('../db/knex');


router.get("/", function(req, res) {  //post is you calling from inside the program
    res.render('add', { title: 'Add a book' });
});

module.exports = router;
