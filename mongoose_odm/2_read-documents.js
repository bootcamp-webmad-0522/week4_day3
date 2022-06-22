// DB CONNECTION
require('./0_database-connection')

// MODEL
const Dog = require('./models/Dog.model')



// // .find()
// // Sin argumento
// // Retorna un array de objetos con todos los registros 

// Dog
//     .find()
//     .then(allDogsFromDB => {
//         console.log(`Tenemos un total de ${allDogsFromDB.length} perros. Estos son:`)
//         console.log(allDogsFromDB)
//     })
//     .catch(err => console.log(err))






// // .find()
// // Puede recibir un primer argumento (query)
// // Retorna un array de objetos con todos los registros que hagan match

// Dog
//     .find({ age: { $lt: 8 } })
//     .then(allDogsFromDB => allDogsFromDB.forEach(elm => console.log(`El perro ${elm.name} tiene ${elm.age} años`)))
//     .catch(err => console.log('Se produjo un error:', err))






// // .findById()
// // Recibe un string con un ID
// // Retorna el objeto que haga match, o null si no exitse

// Dog
//     .findById('62b2d6f7f76aba1e390354f5')
//     .then(theDog => console.log(theDog))
//     .catch(err => console.log('Se produjo un error:', err))






// .findOne()
// Recibe un argumento (query), retorna un objeto con el primer registro que haga match 

Dog
    .findOne({ age: { $lt: 6 } })
    .then(firstMatchDog => console.log(firstMatchDog))
    .catch(err => console.log('Se produjo un error:', err))
