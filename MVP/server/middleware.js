// import the housing model 
var Housing = require('./db/database');

var helper = function() {
  return Housing.find({}, function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log('About to send the following data: ', data);
    return data;
    });
};

// function to get housing data from db
module.exports = function (req, res) {
  helper()
  .then(function(data) {
    console.log('About to send the following data: ', data);
    res.json(data);
  });
};