"use strict";

var express = require("express");
var router = express.Router();
var knex = require('../db/knex');

// var queries = require("../queries");


router.get("/", function(request, response) {  //post is you calling from inside the program
  knex('books')  //refers to books table
    .select("title", "genre", "cover", "description" )
    .then(function(answer) { //
        response.render("books", { //render always refers to views folder, + /books.hbs ("books")
          page_name: "books",
          title: "title",
          genre: "genre",
          cover: "cover",
          description: "description",
          data: answer
        });
    });
    // response.send("hello");

});

module.exports = router;
