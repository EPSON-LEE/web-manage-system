let http = require('http')
let url = require('url')

exports.start = (route, handle) => {
  http.createServer((request, response) => {
    let pathName = url.parse(request.url).pathname
    console.log("Request for " + pathName + ' has received')

    route(handle, pathName, response)
    
  }).listen(8888)
  console.log('server has started')
}