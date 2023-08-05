const express = require('express')
const dao_team = require('../db/dao/team')
const router = express.Router()

router.get('/', async (req, res) => {
    res.json(await dao_team.selectAll()).status(200)
})

router.get('/:abbreviation', async(req, res) => {
    abbreviation = req.params.abbreviation.toUpperCase()
    res.json(await dao_team.select(abbreviation)).status(200)
})

router.post('/', async(req, res) => {
    await dao_team.insert(req.body)
    res.send(200)
})

router.delete('/', async (req, res) => {
    await dao_team.delete(req.body.name)
    res.send(200)
})

module.exports = router
