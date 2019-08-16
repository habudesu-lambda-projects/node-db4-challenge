
exports.up = function(knex) {
  return (
    knex.schema
    .createTable('recipes', tbl => {
      tbl.increments()
      tbl.text('name').notNullable().unique()
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.text('name').notNullable().unique()
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments()
      tbl.integer('recipeId').unsigned().notNullable().references('recipes.id')
      tbl.integer('ingredientId').unsigned().notNullable().references('ingredients.id')
    })
    .createTable('instructions', tbl => {
      tbl.increments()
      tbl.integer('recipeId').unsigned().notNullable().references('recipes.id')
      tbl.text('instruction').notNullable()
      tbl.integer('step_number').unsigned().notNullable()
    })
  )
};

exports.down = function(knex) {
  return (
    knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe-ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
  )
};
