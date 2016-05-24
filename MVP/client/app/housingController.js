
angular.module('app.housing', [])
  .controller('HousingCtrl', function($scope, dataService) {
    console.log("In housingController.js!---------  ");
    $scope.data = "Here is where my data will go!";
    dataService.getHousingData().then(function(data) {
      $scope.data = data;
      console.log(data);
    });
});