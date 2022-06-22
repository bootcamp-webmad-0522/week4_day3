const express = require('express')
const { join } = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

// Database
require('./db')                     // Default index.js file loading

// Model
const Dog = require('./models/Dog.model')

app.get('/', (req, res) => {

    Dog
        .find()
        .then(dogs => {
            res.render('dogs-list', { dogs })
        })
        .catch(err => console.log(err))
})

app.listen(5005, console.log('SERVER RUNNING ON PORT 5005'))