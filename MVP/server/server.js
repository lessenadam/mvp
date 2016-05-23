// initialize server 
var express = require('express');
var app = express();

console.log("DIRECTORY HERE IS------------: ",__dirname);
// potentially __dirname + /client/index.html
// app.use('/public', express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/../client'));

// server logic

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/../client/index.html');
});



// server connection 

app.listen(8080, function () {
  console.log('rent krunch listening on port 8080!');
});

