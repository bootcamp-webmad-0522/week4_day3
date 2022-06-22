// DB CONNECTION
require('./0_database-connection')

// MODEL
const Dog = require('./models/Dog.model')


Dog
    .find()
    .select({ name: 1, age: 1 })                 // projection
    .sort({ name: 1 })                           // sorting
    .skip(1)
    .limit(3)
    .then(allDogs => console.log('Tenemos', allDogs.length, 'y son:', allDogs))
    .catch(err => console.log(err))