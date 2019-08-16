const db = require('../data/db-config.js')

module.exports = {
  get,
  getShoppingList
}

function get () {
  return db('recipes')
}

function getShoppingList(recipeId) {
  return db('recipe_ingredients').where({recipeId})
}
