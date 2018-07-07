//the require function reads a javascript file, executes it, at proceeds to return an object
//we want to use the http functionality
var http = require('http');

//creating a server application
//this is called whenever a request is made to the application
http.createServer(function(req, res){
  res.writeHead(200,{'content-type':'text/plain'});
  res.end('Hello World\n');
}).listen(8124);

console.log('Server running on 8124');
