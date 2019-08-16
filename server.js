const express = require('express')

const db = require('./data/db-config.js')
const RecipeRouter = require('./recipes/recipe-router.js')
const InstructionRouter = require('./instructions/instruction-router.js')
const IngredientRouter = require('./ingredients/ingredient-router.js')

const server = express()

server.use(express.json())
server.use('/api/recipes', RecipeRouter)
server.use('/api/instructions', InstructionRouter)
server.use('/api/ingredients', IngredientRouter)

server.get('/', (req, res) => {
  server.send('<h1>Node DB4 Challenge</h1>')
})

module.exports = server
