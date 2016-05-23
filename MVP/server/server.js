// initialize server 
var express = require('express');
var app = express();




app.use(express.static(__dirname + '/../client'));


// server logic


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/../client/index.html');
});

app.get('/api/housing', function(req,res){
  res.send("Thanks for requesting the /api/housing page");
})



// server connection 

app.listen(8080, function () {
  console.log('rent krunch listening on port 8080!');
});

