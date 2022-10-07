const mongoose = require('mongoose')

const starwarsSchema = mongoose.Schema({
    title: String,
    shortDescrption: String,
    description: String,
    image: String
})

module.exports = mongoose.model('starWars', starwarsSchema);