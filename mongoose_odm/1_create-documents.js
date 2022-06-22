// DB CONNECTION
require('./0_database-connection')

// MODEL
const Dog = require('./models/AdvancedDog.model')




// .create()
// argumento: objeto a crear en la BBDD
// retorno: objeto creado en BBDD

// Dog
//     .create({ name: 'Popino', color: 'Marroncito toffe', age: 15 })
//     .then(newDog => console.log('El nuevo perro es', newDog))
//     .catch(err => console.log('Error', err))





// // // .create()
// // // argumento: array de objetos a crear en la BBDD
// // // retorno: array de objetos creados en BBDD
// Dog
//     .create([
//         { name: 'Lassie', age: 5, color: 'Negro' },
//         { name: 'Popino', age: 14, color: 'Toffe y caramelo' },
//         { name: 'Salchichonio', age: 14, color: 'Toffe y caramelo' },
//         { name: 'Scooby Doo', age: 1, color: 'Marroncito' },
//         { name: 'Pistachin', age: 16, color: 'Toffe y caramelo' }
//     ])
//     .then(theNewDogs => theNewDogs.forEach(elm => console.log(`Este perro se llama ${elm.name}`)))
//     .catch(err => console.log('ERROR DE MONGOOSE ---- ', err))





Dog
    .create({ name: 'popi', age: 9, color: 'Blanco', chip: '4253AA', mail: 'lsjhjos@ironhack.com' })
    .then(theNewDogs => theNewDogs.forEach(elm => console.log(`Este perro se llama ${elm.name}`)))
    .catch(err => console.log('ERROR DE MONGOOSE ---- ', err))