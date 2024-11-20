const fs = require('node:fs/promises')
// If promises is not supported, we can use the following code
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)

readFilePromise('archivo.txt', 'utf-8')
  .then(data => {
    console.log('Primer archivo leído:', data)
  })
// !If promises...

console.log('Leyendo el primer archivo...')

fs.readFile('archivo.txt', 'utf-8')
  .then(data => {
    console.log('Primer archivo leído:', data)
  })


console.log('Leyendo el segundo archivo...')

fs.readFile('archivo2.txt', 'utf-8')
  .then((data) => {
    console.log('Segundo archivo leído:', data)
  })
  .catch(err => {
    console.error('Error al leer el segundo archivo:', err)
  })
