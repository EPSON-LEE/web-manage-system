let http = require('http')
let url = require('url')

exports.start = (route, handle) => {
  http.createServer((Request, Response) => {
    let pathName = url.parse(Request.url).pathname
    console.log("Request for " + pathName + ' has received')

    Response.writeHead(200, {"Content-Type": "text/plain"})
    let content = route(handle, pathName)
    Response.write(content)
    Response.end()
  }).listen(8888)
  console.log('server has started')
}