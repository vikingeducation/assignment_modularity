console.log("breedService loaded");
pupHub.factory('breedService', ['$http', function($http) {
  var breeds = [];

  var getBreeds = function() {
    return breeds;
  };

  var fetchBreeds = function() {
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/breeds.json'
    });
  };

  var populateBreeds = function() {
    fetchBreeds().then(function successCallback(response) {
      angular.copy(response.data, breeds);
    }, function errorCallback(response) {
      console.log("BREED ERROR: " + response);
    });
  };

  var searchBreed = function(id) {
    var breed = breeds.filter(function(breed) {
      return breed.id === id;
    })[0];

    return breed;
  };


  return {
    getBreeds: getBreeds,
    fetchBreeds: fetchBreeds,
    populateBreeds: populateBreeds,
    searchBreed: searchBreed,
  };

}]);
