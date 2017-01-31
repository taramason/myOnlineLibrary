"use strict";

var express = require("express");
var router = express.Router();
var queries = require('../queries');
// var queries = require("../queries");


router.get("/", function(request, response, next) {
    console.log("here");
    queries.getBook()
    .then(function(books) {
        response.render("books", {books: books});
    });
    response.send("hello");
});

module.exports = router;
