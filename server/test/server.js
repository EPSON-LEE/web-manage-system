let http = require('http')
let url = require('url')


exports.start = (route, handle) => {
  http.createServer((request, response) => {
    let postData = ''
    let pathName = url.parse(request.url).pathname
    console.log("Request for " + pathName + ' has received')

    request.setEncoding('utf8')
    request.addListener('data', (postDataChunk) => {
      postData += postDataChunk
      console.log("Received POST data chunk" + postDataChunk + " .")
    })
    request.addListener("end", () => {
      route(handle, pathName, response, postData)
    })

  }).listen(8888)
  console.log('server has started')
}