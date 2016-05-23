var url = 'http://localhost:8080/api/rentkrunch/housing/'

angular.module('app', [])
  .factory('dataService', function($http) {
   
    var getHousingData = function() {
        console.log("INSIDE THE FACTORY!!!!!")
        return $http({
          method: 'GET', 
          url: '/api/housing'
        })
        .then(function (result) {
          console.log(result);
          return result.data;
         }, function(err) {
            console.log('Error with data---: ', err);
         });
       }
    return {
      getHousingData: getHousingData
    };
  })
  .controller('HousingCtrl', function($scope, dataService) {
    console.log("In housingController.js!---------  ");
    $scope.data = "Here is where my data will go!";
    dataService.getHousingData().then(function(data) {
      $scope.data = data;
      console.log(data);
  });
});