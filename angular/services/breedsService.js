ajaxPuppies.factory("breedsService", ["$http", function($http) {
  // call API to get brreds list
  var _breeds = [];

  var _populateBreeds = function() {
    return $http({
      method: "GET",
      url: "https://ajax-puppies.herokuapp.com/breeds.json",
      dataType: "json"
    }).then(function(response) {
      return angular.copy(response.data, _breeds)
    })
  };

  var getBreeds = function() {
    if (_breeds.length) {
      return _breeds;
    } else {
      return _populateBreeds();
    }
  }

  var getBreedByName = function(name) {
    for (var i = 0; i < _breeds.length; i++) {
      if (_breeds[i].name.toLowerCase() === name.toLowerCase()) {
        return _breeds[i];
      }
    }  
  }

  var getBreedById = function(id) {
    for (var i = 0; i < _breeds.length; i++) {
      if (_breeds[i].id === id) {
        return _breeds[i];
      }
    }
  }

  return {
    getBreeds: getBreeds,
    getBreedById: getBreedById,
    getBreedByName: getBreedByName
  }
}])
