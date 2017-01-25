pupShelter.factory('breedService', ['$http', function($http) {
  var breeds = [];

  var getBreeds = function() {
    return breeds;
  };

  var getAll = function() {
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/breeds.json'
    });
  };

  var fetchBreeds = function(callback) {
    getAll().then(function successCallback(response) {
      breeds = response.data;
      callback();
    }, function errorCallback(response) {
      console.log(response);
    });
  };

  var getBreedFor = function getBreedFor(id) {
    var breed = breeds.filter(function(breed) {
      return breed.id === id;
    })[0];

    return breed;
  }

  return {
    fetchBreeds: fetchBreeds,
    getBreeds: getBreeds,
    getBreedFor: getBreedFor
  };

}]);
