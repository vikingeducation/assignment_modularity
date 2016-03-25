puppies.factory('breedsService', ['$http', function($http) {

  var obj = {};
  var _breeds = [];

  obj.seedBreeds = function(response) {
    console.log('seeding breeds');
    response.data.forEach(function(breed) {
      _breeds.push(breed.name);
    });
  };

  obj.getBreedsFromAPI = function() {
    return $http({
      method: 'GET',
      url: "https://ajax-puppies.herokuapp.com/breeds.json"
    });
  };

  obj.getBreedList = function() {
    return _breeds;
  }

  return obj;
}])