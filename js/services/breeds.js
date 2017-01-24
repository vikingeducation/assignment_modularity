
puppies.factory("breedService", ["$http", function($http){
  var breeds = [];

  var getBreeds = function getBreeds(){
    return $http.get("https://ajax-puppies.herokuapp.com/breeds.json")
      .then(function(resp){
        angular.copy(resp.data, breeds);
        return breeds
      })
  };

  var newBreed = function newBreed(breedName){
    return $http.post("https://ajax-puppies.herokuapp.com/breeds.json", {name: breedName})
      .then(function(resp){
        breeds.push(resp.data);
        return resp.data.id;
      })
  }

  var findBreed = function(id){
    for(var i = 0; i < breeds.length; i++){
      if(breeds[i].id === id){
        return breeds[i];
      }
    }
  }

  return {
    breeds: getBreeds,
    newBreed: newBreed
  };

}]);
