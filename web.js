var fs = require('fs');

var express = require('express');

var buffer = new Buffer('hello world 10');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    console.log(buffer.toString());
    response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
