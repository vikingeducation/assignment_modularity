puppyShelter.factory('breeds',
  ['$http', function($http) {

  var breeds = {};


  breeds.pullData = function() {
    return $http({
      method: 'GET',
      url: "https://pacific-stream-9205.herokuapp.com/breeds.json"
    });
  };


  return breeds;
}]);