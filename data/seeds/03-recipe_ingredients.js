
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipeId: 1, ingredientId: 1, quantity: 3},
        {recipeId: 1, ingredientId: 2, quantity: 1},
        {recipeId: 1, ingredientId: 3, quantity: 1},
        {recipeId: 1, ingredientId: 6, quantity: 2, unit: 'tablespoons'},
        {recipeId: 2, ingredientId: 4, quantity: 1},
        {recipeId: 2, ingredientId: 5, quantity: 1},
        {recipeId: 2, ingredientId: 6, quantity: 2, unit: 'tablespoons'}
      ]);
    });
};
