
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('join').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('join').insert({
          book_id: 43,
          author_id: 1
        }),
        knex('join').insert({
          book_id: 44,
          author_id: 2
        })
      ]);
    });
};
