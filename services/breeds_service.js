pup.factory('breedsService', ['$http', function($http) {
  var stub = {};

  var _breeds = [];

  stub.getBreeds = function() {
    return _breeds;
  };

  stub.requestBreeds = function() {
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/breeds.json',
      headers: { 'Content-Type': 'application/json'},
    }).then( function(response) {
      _breeds.splice(0, 0);
      for (var i = 0; i < response.data.length; i++) {
        _breeds.push(response.data[i]);
      }

      console.log("breeds fully loaded");
    });
  };

  return stub;
}]);