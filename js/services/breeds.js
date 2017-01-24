
puppies.factory("breedService",
  ["$http", "$q",
    function($http, $q){

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
      };

      var findBreed = function(id){
        for(var i = 0; i < breeds.length; i++){
          if(breeds[i].id === id){
            return breeds[i];
          }
        }
      };

      var findByName = function(breedName){
        var breed = _findBreed(breedName);
        return _createBreed(breed, breedName);
      };

      var _findBreed = function _findBreed(breedName){
        for(var i = 0; i < breeds.length; i++) {
          if(breeds[i].name.toLowerCase() === breedName.toLowerCase()){
            return breeds[i];
          }
        }
      };

      var _createBreed = function _createBreed(breed, breedName){
        if(!breed){
          return newBreed(breedName);
        } else {
          return $q(function(resolve, reject){
            resolve(breed.id);
          });
        }
      };

      return {
        breeds: getBreeds,
        newBreed: newBreed,
        findBreed: findBreed,
        findByName: findByName
      };

}]);
