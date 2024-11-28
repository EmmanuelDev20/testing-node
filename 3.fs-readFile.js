const fs = require('node:fs')

console.log('Leyendo el primer archivo...')

fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

console.log('Leyendo el segundo archivo...')

fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
