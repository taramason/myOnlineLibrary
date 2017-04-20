"use strict";

var express = require("express");
var router = express.Router();
var knex = require('../db/knex');



// router.get("/", function(req, res) {  //post is you calling from inside the program
//   // console.log("im inside authors");
//   knex('authors')  //refers to authors table
//     .select()
//     .then(function(authorsData) {
//                   console.log("this is authors data", authorsData.id)
//       knex('join')
//         .join('books', 'join.book_id', 'books.id')
//         .where('join.author_id', authorsData.id)
//         .select()
//         .then(function(booksData) {
//                     console.log("booksData", booksData)
//                     console.log("authorsData", authorsData)
//             res.render("authors", {
//               books: booksData,
//               authors: authorsData
//             });
//         });
//       })
//     });



// .then(function() {
//   return knex('join')
//     .join('books', 'join.book_id', 'authors.id')
//     .join('books', )
//     .select('users.user_name as user', 'accounts.account_name as account');
// })
//
// .then(function() {
//   return knex('users')
//     .join('accounts', 'users.id', 'accounts.user_id')
//     .select('users.user_name as user', 'accounts.account_name as account');
// })

router.get("/", function(req, res) {  //post is you calling from inside the program
  // console.log("im inside authors");
  knex('authors')  //refers to authors table
    .select()
    .orderBy("last", "asc")
    .then(function(answer) {
      // console.log("I'm inside authors!");
        res.render("authors", { //render always refers to views folder, + /authors.hbs ("authors")
          id: "id",
          first: "first",
          last: "last",
          bio: "bio",
          portrait: "portrait",
          data: answer
        });
    });
});

// router.get("/", function(req, res) {  //post is you calling from inside the program
//   // console.log("im inside authors");
//   knex('authors')  //refers to authors table
//     .select()
//     .orderBy("last", "asc")
//     .then(function(authors) {
//       // console.log("I'm inside authors!");
//       return knex("join")
//       .select()
//     })
//     .then(function(join){
//       console.log("I'm in join!")
//       res.render("authors",
// { //render always refers to views folder, + /authors.hbs ("authors")
//         author_id: "author_id",
//         book_id: "book_id",
//         id: "id",
//         first: "first",
//         last: "last",
//         bio: "bio",
//         portrait: "portrait"
//       });
//
//     })
//
// });
//
// router.get("/schools",function(req,res){
//   var schools
//   knex("schools")
//     .select()
//     .then(function(ret){
//       schools=ret
//       return knex("students")
//       .select()
//     })
//     .then(function(students){
//       res.render("schools",{
//         students: students,
//         schools: schools
//       })
//     })
// })


// router.get("/", function(req, res) {  //post is you calling from inside the program
//   console.log("I'm inside join");
//   knex('join')  //refers to authors table
//     .select()
//     .orderBy("author_id", "asc")
//     .then(function(answer) {
//       console.log("I'm inside join!");
//         res.render("authors", { //render always refers to views folder, + /authors.hbs ("authors")
//           author_id: "author_id",
//           book_id: "book_id",
//           data: answer
//         });
//     });
// });






module.exports = router;
