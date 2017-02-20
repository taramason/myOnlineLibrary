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
//table name, where function, books.id, +id, delete

  //knex('books')  //refers to books table
  //   .select("title", "genre", "cover", "description" )
      //  .del()
  //   .then(function() { //
  //       response.render("books", { //render always refers to views folder, + /books.hbs ("books")
  //         page_name: "books",
  //         title: "title",
  //         genre: "genre",
  //         cover: "cover",
  //         description: "description",
  //         data: answer
  //       });
  //   });
//from the interwebs:
// knex("books")
// .where("col1","a4")
// .del()
// .then(function (count) {
//   console.log(count);
// })
// .finally(function () {
//   knex.destroy();
// });



module.exports = router;
