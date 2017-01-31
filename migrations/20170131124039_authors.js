
"use strict";
exports.up = function(knex, Promise) { //what to do when running migration
  return knex.schema.createTable("authors", function (table) { //creates new table called books
  table.increments(); //increments id column w type of serial
  table.text("name"); //creates text column with name of "name"
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("authors"); //tells what to do when undoing migration
};
