console.log("puppyService loaded");
pupHub.factory('puppyService', ['$http', 'breedService', function($http, breedService) {
  var puppies = [];

  var getPuppies = function() {
    return puppies;
  };

  var fetchPuppies = function() {
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json'
    });
  };

  var populatePuppies = function() {
    fetchPuppies().then(function successCallback(response) {
      angular.copy(response.data, puppies);
      // console.log("puppy data: ", response.data);
    }, function errorCallback(response) {
      console.log("ERROR: " + response);
    });
  };

  var addPuppy = function(puppy){
    var newPuppy = {
      name: puppy.name,
      breed_id: puppy.breed_id
    };

    $http({
      method: 'POST',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json',
      data: newPuppy
    }).then(function successCallback(response) {
      var formattedPuppy = formatPuppy(response.data);

      puppies.push(formattedPuppy);
    }, function errorCallback(response) {
      console.log(response);
    });
  };

  var formatPuppy = function(pupData) {
    pupData.breed = breedService.searchBreed(pupData.breed_id);
    delete pupData.breed_id;

    return pupData;
  };

  var adoptPuppy = function adoptPuppy(dog) {
    $http({
      method: 'DELETE',
      url: 'https://ajax-puppies.herokuapp.com/puppies/'+dog+'.json',
    }).then(function successCallback(response) {
      removePuppy(response.data.id);
    }, function errorCallback(response) {
      console.log(response);
    });
  };

  var removePuppy = function(dog) {
    for (var i = 0; i < puppies.length; i++) {
      if (puppies[i].id === dog) {
        return puppies.splice(i, 1);
      }
    }
    return false;
  };


  return {
    getPuppies: getPuppies,
    fetchPuppies: fetchPuppies,
    populatePuppies: populatePuppies,
    addPuppy: addPuppy,
    adoptPuppy: adoptPuppy,
  };
}]);
