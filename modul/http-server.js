const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200).end('First Time using core modul')
})

server.listen(3000)