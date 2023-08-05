const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://weast:${process.env.MONGODB_PASSWORD}@projetinweb.grpyp77.mongodb.net/?retryWrites=true&w=majority`);

mongoose.connection.on('connected', function(){
    console.log("MongoDB conectado")
})

module.exports = mongoose
