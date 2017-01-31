

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('books').insert({id: 1, name: 'Python In A Nutshell'}),
        knex('books').insert({id: 2, name: 'Think Python'}),
        knex('books').insert({id: 3, name: 'Learning React Native'}),
        knex('books').insert({id: 4, name: 'You Don\'t Know JS: ES6 & Beyond'}),
        knex('books').insert({id: 5, name: 'You Don\'t Know JS: Scope & Closures'}),
        knex('books').insert({id: 6, name: 'You Don\'t Know JS: Async & Performance'})

      ]);
    });
};
