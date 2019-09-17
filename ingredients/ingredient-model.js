const db = require('../data/db-config.js')

module.exports = {
  getRecipes
}

function getRecipes(id) {
  return db
    .select('recipes.name')
    .from('recipes')
    .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipeId')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredientId')
    .where('ingredients.id', '=', id)
}
