"use strict";

var express = require("express");
var router = express.Router();
var knex = require('../db/knex');

// var queries = require("../queries");


router.get("/", function(req, res) {  //post is you calling from inside the program
  const id = req.params.id;
  knex('books')  //refers to books table
    .select()
    .then(function(answer) { //
        res.render("books", { //render always refers to views folder, + /books.hbs ("books")
          id: "id",
          page_name: "books",
          title: "title",
          genre: "genre",
          cover: "cover",
          description: "description",
          data: answer
        });
    });

});


//render single book page
router.get("/:id", function(req, res) {
  var id = req.params.id;
  console.log("req.body", req.body)
  knex('books')
    .select()
    .where("id", id)
    .first()
    .then(function(answer) {
      console.log("answer", answer)
        res.render("one", answer);
    });
});

//add a book form
router.get("/add", function(req, res) {
  res.render('add', { title: 'Add a book' });
});

//Add a book POST route:
router.post('/', function(req, res, next) {
  knex('books')
    .insert({
      title: req.body.objTitle,
      genre: req.body.objGenre,
      cover: req.body.objImg,
      description: req.body.objDescr
    })
    .then(function() {
      res.redirect(`/books`)
    })
});

//Render edit form
router.get("/:id/edit", function(req, res, next) {
  console.log("we are in router.get")
  const id = req.params.id;
  knex('books')
  .select()
  .where("id", id)
  .then(answer => {
    console.log("answerrr", answer);
    res.render('edit', answer[0]);
    })
});

//Edit PUT route:
router.put("/:id", function(req, res){
  const book = {
    title: req.body.title,
    genre: req.body.genre,
    cover: req.body.cover,
    description: req.body.description
  };
  console.log("book", book)
  console.log("req.body", req.body)
  console.log("req.params", req.params)
  var id = req.params.id;
  console.log("id", id);
  knex('books')
  .where("id", id)
  .update(book, "id"
  )
  .then(function(ans) {
    res.redirect(`/books`);
  })
})

//edit DELETE route:
router.delete("/:id", function(req, res) {
  const id = req.params.id;
  knex('books')
  .where("id", id)
  .del()
  .then(answer => {
    res.redirect(`/books`);
    })
});



module.exports = router;
