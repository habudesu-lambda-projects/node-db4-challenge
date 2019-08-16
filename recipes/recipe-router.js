const express = require('express')

const router = express.Router()

const Recipes = require('./recipe-model.js')

router.get('/', async (req, res) => {
  try {
    const recipe = await Recipes.get()
    res.status(200).json(recipe)
  }
  catch(error) {
    res.status(500).json(error)
  }
})

module.exports = router
