const net = require('node:net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      console.log(`Port ${port} is available`)
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findAvailablePort(0).then(port => resolve(port)))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
