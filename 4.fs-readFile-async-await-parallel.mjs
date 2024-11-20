// ECMA script module support await out of a function
import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('archivo.txt', 'utf-8'),
  readFile('archivo2.txt', 'utf-8')
]).then(([first, second]) => {
  console.log(first)
  console.log(second)
})