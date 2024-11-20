const path = require('node:path')

// Barra separadora de directorios segun SO
console.log(path.sep)

// Join routes

const filePath = path.join('content', 'subfolder', 'test.txt')

console.log(filePath)

const base = path.basename('tmp/emmanuelovares/password.txt')

console.log(base)

const filename = path.basename('tmp/emmanuelovares/password.txt', '.txt')

console.log(filename)

const extension = path.extname('image.jpg')

console.log(extension)