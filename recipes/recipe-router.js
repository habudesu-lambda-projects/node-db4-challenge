const express = require('express')

const router = express.Router()

const Recipes = require('./recipe-model.js')

router.get('/', async (req, res) => {
  try {
    const recipe = await Recipes.getRecipes()
    res.status(200).json(recipe)
  }
  catch(error) {
    res.status(500).json(error)
  }
})

router.get('/:id/shoppingList', async (req, res) => {
  const { id } = req.params
  try {
    const shoppingList = await Recipes.getShoppingList(id)
    res.status(200).json(shoppingList)
  }
  catch(error) {
    res.status(500).json(error)
  }
})

router.get('/:id/instructions', async (req, res) => {
  const { id } = req.params
  try {
    const instructions = await Recipes.getInstructions(id)
    res.status(200).json(instructions)
  }
  catch(error) {
    res.status(500).json(error)
  }
})

module.exports = router
