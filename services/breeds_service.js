pup.factory('breedsService', ['$http', function($http) {
  var stub = {};

  var _breeds = {};

  stub.getBreeds = function() {
    return _breeds;
  };

  stub.requestBreeds = function() {
    $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/breeds.json',
      headers: { 'Content-Type': 'application/json'},
    }).then( function(response) {

      _breeds = response;
      console.log("breeds fully loaded");
    });
  };

  return stub;
}]);