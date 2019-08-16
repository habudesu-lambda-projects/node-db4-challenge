const express = require('express')

const router = express.Router()

const Instructions = require('./instruction-model.js')

router.get('/', async (req, res) => {
  try {
    const instruction = await Instructions.get()
    res.status(200).json(instruction)
  }
  catch(error) {
    res.status(500).json(error)
  }
})

module.exports = router
