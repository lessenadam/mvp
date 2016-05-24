

angular.module('app.services', [])
  .factory('dataService', function($http) {
   
  var getHousingData = function() {
      console.log("INSIDE THE FACTORY!!!!!")
      return $http({
        method: 'GET', 
        url: '/api/housing'
      })
      .then(function (result) {
         return result.data;
       });
     }
  return {
    getHousingData: getHousingData
  };
});