const express = require('express')

const db = require('./data/db-config.js')
const RecipeRouter = require('./recipes/recipe-router.js')

const server = express()

server.use(express.json())
server.use('/api/recipes', RecipeRouter)

server.get('/', (req, res) => {
  server.send('<h1>Node DB4 Challenge</h1>')
})

module.exports = server
