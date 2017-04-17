
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('join').del()
    .then(function () {
      // Inserts seed entries
      return knex('join').insert([

      ]);
    });
};
