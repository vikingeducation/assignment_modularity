puppyShelter.factory('breeds',
  ['$http', function($http) {

  var breeds = {};


  breeds.index = function() {
    return $http({
      method: 'GET',
      url: "https://pacific-stream-9205.herokuapp.com/breeds.json"
    });
  };


  breeds.create = function(newBreedName) {
    return $http({
      method: 'POST',
      url: "https://pacific-stream-9205.herokuapp.com/breeds.json",
      data: JSON.stringify( { name: newBreedName } )
    });
  }


  return breeds;
}]);