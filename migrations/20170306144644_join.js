
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("join", function (table) { //creates new table called books
    table.increments(); //increments id column w type of serial
    table.integer('book_id').references("books", "id");
    table.integer('author_id').references("authors", "id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("join");
};
