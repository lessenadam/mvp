// initialize server 
var express = require('express');
var app = express();


// server logic

app.get('/', function (req, res) {
  res.send('Hello World!');
});


// server connection 

app.listen(8080, function () {
  console.log('rent krunch listening on port 8080!');
});

