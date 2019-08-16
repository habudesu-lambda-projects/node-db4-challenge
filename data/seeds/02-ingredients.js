
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Eggs'},
        {name: 'Onion'},
        {name: 'Green Pepper'},
        {name: 'Hot Dog'},
        {name: 'Hot Dog Bun'},
        {name: 'Ketchup'}
      ]);
    });
};
