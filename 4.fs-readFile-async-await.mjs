// ECMA script module support await out of a function
import fs from 'node:fs/promises'

console.log('Leyendo el primer archivo...')

const first = await fs.readFile('archivo.txt', 'utf-8')
console.log(first)

console.log('Leyendo el segundo archivo...')

const second = await fs.readFile('archivo2.txt', 'utf-8')

console.log(second)