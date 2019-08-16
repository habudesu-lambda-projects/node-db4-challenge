const express = require('express')

const router = express.Router()

const Ingredients = require('./ingredient-model.js')

router.get('/', async (req, res) => {
  try {
    const ingredient = await Ingredients.get()
    res.status(200).json(ingredient)
  }
  catch(error) {
    res.status(500).json(error)
  }
})

module.exports = router
