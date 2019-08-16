const db = require('../data/db-config.js')

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
}

function getShoppingList(recipeId) {
  return db('recipe_ingredients')
  .join('ingredients', 'recipe_ingredients.ingredientId', 'ingredients.id')
  .select('ingredients.name', 'recipe_ingredients.quantity', 'recipe_ingredients.unit')
  .where('recipe_ingredients.recipeId', '=', recipeId)
}

function getInstructions(recipeId) {
  return db
  .select('step_number', 'instruction')
  .from('instructions')
  .where({recipeId})
}
