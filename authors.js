
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('authors').insert({id: 1, colName: 'rowValue1'}),
        knex('authors').insert({id: 2, colName: 'rowValue2'}),
        knex('authors').insert({id: 3, colName: 'rowValue3'})
      ]);
    });
};
