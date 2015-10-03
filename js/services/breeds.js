puppyShelter.factory('breeds',
  ['$http', function($http) {

  var breeds = {};


  breeds.getAll = function() {
    $http({
      method: 'GET',
      url: "https://pacific-stream-9205.herokuapp.com/breeds.json"
    }).then(function success(response) {
      return response.data;
    }, function error(response) {
      console.log('error');
    });
  };


  return breeds;
}]);