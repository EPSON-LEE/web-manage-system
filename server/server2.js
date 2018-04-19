let http = require('http')

let onRequest = (request, response) => {
  console.log('request has received')
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.write("This is a test example....")
  response.end()
}

http.createServer(onRequest).listen(8888)

console.log('testinggggggggggggg')