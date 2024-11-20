const os = require('node:os');

console.log(os)
console.log('Nombre', os.platform())
console.log('Versión', os.release())
console.log('Memoria Libre', os.freemem() / 1024 / 1024)
console.log('Memoria Total', os.totalmem() / 1024 / 1024)
console.log('CPU', os.cpus())
console.log('uptime', os.uptime() / 60 / 60)
console.log('Arquitectura', os.arch())