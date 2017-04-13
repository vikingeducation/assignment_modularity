console.log("breedService loaded");
pupHub.factory('breedService', ['$http', function($http) {
  var breeds = [];

  var getBreeds = function() {
    // populateBreeds();
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
      // console.log("breed data is: ", response.data);
    }, function errorCallback(response) {
      console.log("BREED ERROR: " + response);
    });
  };

  return {
    getBreeds: getBreeds,
    fetchBreeds: fetchBreeds,
    populateBreeds: populateBreeds,
  };

}]);
