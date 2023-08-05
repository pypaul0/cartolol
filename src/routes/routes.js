const express = require('express')
const team = require('./team')
const router = express.Router()

router.use(express.json())
router.use('/teams', team)

module.exports = router
