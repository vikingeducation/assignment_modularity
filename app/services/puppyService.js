puppyAPI.factory('PuppyService', ['$http',function($http){

  var PUPPY_API_URL = "https://pacific-stream-9205.herokuapp.com/";

  var getBreeds = function() {
    return $http.get(PUPPY_API_URL + "breeds.json").then(
        function(response) {
          return response.data.filter(function(el) {
            return el.name;
          });
        });
  };

  var getPuppies = function() {
    return $http.get(PUPPY_API_URL + "puppies.json").then(
        function(response) {
          return response.data;
        });
  };

  var createPuppy = function(name, breedId) {
    return $http.post(PUPPY_API_URL + "puppies.json", {name: name, breed_id: breedId}).then(
        function(response) {
          return response.data;
        });
  };

  var deletePuppy = function() {};

  return {
    getPuppies: getPuppies,
    getBreeds: getBreeds,
    createPuppy: createPuppy,
    deletePuppy: deletePuppy
  };
}]);
