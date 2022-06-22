const { Schema, model } = require('mongoose')

const dogSchema = Schema({
    name: String,
    age: Number,
    color: String
})

const Dog = model('dog', dogSchema)

module.exports = Dog