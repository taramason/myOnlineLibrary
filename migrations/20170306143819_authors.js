
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("authors", function (table) { //creates new table called books
    table.increments(); //increments id column w type of serial
    table.text('first');
    table.text('last');
    table.text('bio');
    table.text('portrait');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("authors");
};
