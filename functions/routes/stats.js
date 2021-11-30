const express = require('express')
const router = express.Router()
const Stats = require('../models/Stats')

// Get all
router.get('/', async (req, res) => {
  try {
    const stats = await Stats.find()
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.status(200).json(stats)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get one by id
router.get('/:id', async (req, res) => {
  try {
    const stats = await Stats.findById(req.params.id)
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.status(200).json(stats)
  } catch (err) {
    res.statsu(500).json({ message: err.message })
  }
})

// Get one by date
router.get('/date/:date', async (req, res) => {
  try {
    const stats = await Stats.findOne({ statsDay: req.params.date })
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.status(200).json(stats)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router