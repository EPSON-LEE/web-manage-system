let server = require('./server')
let router = require('./router')
let requestHandlers = require('./requestHandlers')

let handle = {}
handle['/'] = requestHandlers.start
handle['/start'] = requestHandlers.start
handle['/upload'] = requestHandlers.upload
handle['/form'] = requestHandlers.form
handle['/uploadFile'] = requestHandlers.uploadFile
handle['/uploadFileDetail'] = requestHandlers.uploadFileDetail

server.start(router.route, handle)