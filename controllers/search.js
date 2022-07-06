// Packages
const express = require('express')
const router = express.Router()

// Views
router.get('/', (req, res) => {
  res.render('search')
})

// Export

module.exports = router
