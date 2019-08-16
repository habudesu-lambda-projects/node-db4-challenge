const express = require('express')

const router = express.Router()

const RecipeIngredients = require('./recipe-ingredient-model.js')

router.get('/', async (req, res) => {
  try {
    const recipeIngredient = await RecipeIngredients.get()
    res.status(200).json(recipeIngredient)
  }
  catch(error) {
    res.status(500).json(error)
  }
})

module.exports = router
