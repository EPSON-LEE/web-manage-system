let exec = require("child_process").exec,
    querystring = require("querystring"),
    formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    // fs = require()

let start = (response, postData) => {
  console.log("Request handler 'start' was called.")

  exec("ls -lah", (err, stdout, stderr) => {
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write(stdout)
    response.end()
  })
}

let upload = (response, postData) => {
  console.log("Request handler 'upload' was called.")
  response.writeHead(200, {"Content-Type": "text/plain"})
  let text = querystring.parse(postData).text
  console.log('postData:', text)
  response.write("You've sent: " + text)
  response.end()
}

let form = (response, postData) => {
  console.log("Request handles 'form' was called")

  let body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" content="text/html; '+
  'charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" method="post">'+
  '<textarea name="text" rows="20" cols="60"></textarea>'+
  '<input type="submit" value="Submit text" />'+
  '</form>'+
  '</body>'+
  '</html>';
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write(body)
  response.end()
}

let uploadFile = (res, req) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}

let uploadFileDetail = (req, res) => {
  let form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    res.end(util.inspect({fields: fields, files: files}));
  })
  return
}

let show = (res, postData) => {
  console.log("Request handler 'upload' was called")
}

exports.start = start
exports.upload = upload
exports.form = form
exports.uploadFile = uploadFile
exports.uploadFileDetail = uploadFileDetail