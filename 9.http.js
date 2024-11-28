const pc = require('picocolors')
const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

// const PORT = 0

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello World')
})

// server.listen(PORT, () => {
//   console.log(pc.green(`Server is running on http://localhost:${PORT}`))
// })

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(pc.green(`Server is running on http://localhost:${port}`))
  })
})

// server.listen(PORT, () => {
//   console.log(pc.green(`Server is running on http://localhost:${server.address().port}`))
// })
