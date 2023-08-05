const express = require('express')
const team_dao = require('../db/dao/team')
const router = express.Router()

router.get('/', async (req, res) => {
    res.json(await team_dao.selectAll()).status(200)
})

router.post('/', async(req, res) => {
    await team_dao.insert(req.body)
    res.send(200)
})

router.delete('/', async (req, res) => {
    await team_dao.delete(req.body.name)
    res.send(200)
})

module.exports = router
