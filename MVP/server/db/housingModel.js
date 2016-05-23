var mongoose = require("mongoose");

var housingSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
    unique: true
  },
  cpi: {
    type: Number,
    required: true
  },
  median_rent: {
    type: Number,
    required: true
  },
});

var year = mongoose.model('housing', housingSchema);

var someYear = new year ({
  year: 1988,
  cpi: 1.4,
  median_rent: 1700
});

someYear.save(function(err, year) {
  if (err) {
    return console.log(err);
  }
  console.log('Successfully saved the year!: ', year);
});