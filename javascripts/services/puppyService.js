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

  return {
    getPuppies: getPuppies,
    fetchPuppies: fetchPuppies,
    populatePuppies: populatePuppies,
    addPuppy: addPuppy,
  };
}]);
