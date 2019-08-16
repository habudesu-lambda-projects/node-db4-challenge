
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipeId: 1, ingredientId: 1},
        {recipeId: 1, ingredientId: 2},
        {recipeId: 1, ingredientId: 3},
        {recipeId: 1, ingredientId: 6},
        {recipeId: 2, ingredientId: 4},
        {recipeId: 2, ingredientId: 5},
        {recipeId: 2, ingredientId: 6}
      ]);
    });
};
