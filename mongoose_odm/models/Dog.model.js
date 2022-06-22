const mongoose = require('mongoose')

const dogSchema = mongoose.Schema({
    name: String,
    age: Number,
    color: String
})

const Dog = mongoose.model('dog', dogSchema)

module.exports = Dog
