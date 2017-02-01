
exports.up = function(knex, Promise) { //what to do when running migration
  return knex.schema
  .createTable("books", function (table) { //creates new table called books
    table.increments(); //increments id column w type of serial
    table.text('title');
    table.text('genre');
    table.text('cover');
    table.text('description'); //creates text column with name of "name"
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("books"); //tells what to do when undoing migration
};
