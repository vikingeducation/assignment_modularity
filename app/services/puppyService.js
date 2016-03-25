puppyAPI.factory('PuppyService', ['$http',function($http){

  var PUPPY_API_URL = "https://pacific-stream-9205.herokuapp.com/";

  var getBreeds = function() {
    return $http.get(PUPPY_API_URL + "puppies.json").then(
        function(response) {
          return response.data;
        });
  };

  var getPuppies = function() {
    return $http.get(PUPPY_API_URL + "puppies.json").then(
        function(response) {
          return response.data;
        });
  };

  return {
    getPuppies: getPuppies,
  };
}]);
