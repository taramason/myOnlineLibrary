"use strict";

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');






router.get("/:id", function(request, response, next) {  //post is you calling from inside the program
  var bookID = request.params.id;  //this is anything after the /: from above.
  knex('books')  //refers to books table
    .select("title", "genre", "cover", "description" )
    .where("books.id", bookID)
    .then(function(answer) { //
      console.log("this is answer", answer);
        response.render("deleteBook", { //render always refers to views folder, + /books.hbs ("books")
          id: bookID,
          title: answer[0].title,
          genre: answer[0].genre,
          cover: answer[0].cover,
          description: answer[0].description
        });
    });
  });




module.exports = router;
