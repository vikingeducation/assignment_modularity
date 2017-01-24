pupShelter.factory('puppyService', ['$http', 'breedService', function($http, breedService) {
  var puppies = [];

  var getPuppies = function() {
    return puppies;
  };

  var getAll = function() {
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json'
    });
  };

  var fetchPuppies = function(callback) {
    getAll().then(function successCallback(response) {
      puppies = response.data;
      callback();
    }, function errorCallback(response) {
      console.log(response);
    });
  };

  var createPuppy = function createPuppy(puppy) {
    var newPuppy = {
      name: puppy.name,
      breed_id: puppy.breed_id
    };

    $http({
      method: 'POST',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json',
      data: newPuppy
    }).then(function successCallback(response) {
      var formattedPuppy = _cleanedUpPuppy(response.data);

      puppies.push(formattedPuppy);
    }, function errorCallback(response) {
      console.log(response);
    });
  };

  var _cleanedUpPuppy = function _cleanedUpPuppy(dirtyPuppy) {
    dirtyPuppy.breed = breedService.getBreedFor(dirtyPuppy.breed_id);
    delete dirtyPuppy.breed_id;

    return dirtyPuppy;
  };

  var adoptPuppy = function adoptPuppy(id) {
    $http({
      method: 'DELETE',
      url: 'https://ajax-puppies.herokuapp.com/puppies/'+id+'.json',
    }).then(function successCallback(response) {
      _deletePuppy(response.data.id);
    }, function errorCallback(response) {
      console.log(response);
    });
  };

  var _deletePuppy = function _deletePuppy(id) {
    for (var i = 0; i < puppies.length; i++) {
      if (puppies[i].id === id) {
        return puppies.splice(i, 1);
      }
    }
    return false;
  };

  return {
    fetchPuppies: fetchPuppies,
    getPuppies: getPuppies,
    createPuppy: createPuppy,
    adoptPuppy: adoptPuppy,
  };
}]);
