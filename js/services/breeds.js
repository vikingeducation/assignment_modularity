
puppies.factory("breedService", ["$http", function($http){
  var breeds = [];

  var getBreeds = function getBreeds(){
    return $http.get("https://ajax-puppies.herokuapp.com/breeds.json")
      .then(function(resp){
        angular.copy(resp.data, breeds);
        return breeds
      })
  };

  return {
    breeds: getBreeds
  };

}]);
