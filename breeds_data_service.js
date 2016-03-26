
puppies.factory( 'breedsDataService',  [ '$http', function($http) {
  var obj = {};

  var _breeds = [];

  obj.getBreeds = function() {
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/breeds.json'
    })
  }

  return obj;
}]);
