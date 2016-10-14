pupApp.factory("breedService", ['$http', function($http){
  var obj = {};

  obj.getBreeds = function(){
    return $http.get("https://ajax-puppies.herokuapp.com/breeds.json");
  };

  return obj;
}]);
