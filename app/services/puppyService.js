puppyAPI.factory('PuppyService', ['$http',function($http){

  var PUPPY_API_URL = "https://ajax-puppies.herokuapp.com/";

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

  var killPuppy = function(id) {
    return $http.delete(PUPPY_API_URL + "puppies/" + id + ".json");
  };

  var createDemon = function() {
     $http.post(PUPPY_API_URL + "breeds", { breed: {name: "Totally A Normal Puppy, Not A Puppy Devouring Demon"} });};


  return {
    getPuppies: getPuppies,
    getBreeds: getBreeds,
    createPuppy: createPuppy,
    killPuppy: killPuppy,
    createDemon: createDemon
  };
}]);
