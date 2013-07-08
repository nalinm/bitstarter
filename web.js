var fs = require('fs');

var express = require('express');

var buffer = new Buffer(100);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  #response.send('Hello World!');
   buffer = fs.readFileSync("/home/ubuntu/bitstarter/index.html");
   response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
