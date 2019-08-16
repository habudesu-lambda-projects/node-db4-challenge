const express = require('express')

const router = express.Router()

const Ingredients = require('./ingredient-model.js')

router.get('/:id/recipes', async (req, res) => {
  const { id } = request.params
  try {
    const recipes = await Ingredients.getRecipes(id)
    res.status(200).json(recipes)
  }
  catch(error) {
    res.status(500).json(error)
  }
})

module.exports = router
