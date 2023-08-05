const express = require('express')
const app = express()
const routes = require('./routes/routes')
const PORT = 3000


app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "content-type")
    res.setHeader("Content-Type", "application/json")
    res.setHeader("Access-Control-Allow-Credentials", true)
    next()
})

app.use('/api', routes)

app.listen(PORT, () => {
    console.log('Server ligado')
})
