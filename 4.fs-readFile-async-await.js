const { readFile } = require('node:fs/promises')

;(async () => {
  console.log('Leyendo el primer archivo...')

  const first = await readFile('archivo.txt', 'utf-8')
  console.log(first)

  console.log('Leyendo el segundo archivo...')

  const second = await readFile('archivo2.txt', 'utf-8')

  console.log(second)
})()
