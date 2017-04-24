"use strict";

var express = require("express");
var router = express.Router();
var knex = require('../db/knex');



router.get("/", function(req, res) {
console.log("I'm in books")
  knex('books')  //books table
    .select()
    .orderBy("title", "asc")
    .then(function(answer) {
        res.render("books", { //views folder, + /books.hbs ("books")
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

//add a book form
router.get("/add", function(req, res, next) {
  console.log("in add");
  res.render('add');
});

//render single book page
router.get("/:id", function(req, res) {
  var id = req.params.id;
  knex('books')
    .select()
    .where("id", id)
    .first()
    .then(function(answer) {
      console.log("answer", answer)
        res.render("one", answer);
    });
});


//Add a book POST route:
router.post('/', function(req, res, next) {
  console.log(req.body);
  var book = {
    title: req.body.title,
    genre: req.body.genre,
    cover: req.body.cover,
    description: req.body.description
};
  knex('books')
    .insert(book, 'id')
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

//Edit PUT route to edit existing book:
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
