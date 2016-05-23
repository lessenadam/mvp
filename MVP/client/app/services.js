// starting with my http call 


angular.module('app', [])
  .factory('dataService', function($http) {
   
  var getHousingData = function() {
      console.log("INSIDE THE FACTORY!!!!!")
      return $http({
        method: 'GET', 
        url: url
      })
      .then(function (result) {
         return result.data;
       });
     }
  return {
    getHousingData: getHousingData
  };
});