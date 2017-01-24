
puppies.factory("puppyService", ["$http", "breedService",

  function($http, breedService){

    var puppies = [];

    var getPuppies = function getPuppies(){
      return $http.get("https://ajax-puppies.herokuapp.com/puppies.json")
        .then(function(resp){
          angular.copy(resp.data, puppies);
          return puppies;
        });
    };

    var _deletePuppy = function _deletePuppy(puppy){
      var index = puppies.indexOf(puppy);
      puppies.splice(index, 1);
    };

    var adoptPuppy = function adoptPuppy(puppy){
      return $http({
        method:"DELETE",
        url: puppy.url
      }).then(function(){
        _deletePuppy(puppy);
      });
    };

    var postPuppy = function postPuppy(puppyData){
      var puppy = {
        name: puppyData.name,
        breed_id: puppyData.breedId
      };

      return $http({
        method: "POST",
        url: "https://ajax-puppies.herokuapp.com/puppies.json",
        data: puppy
      }).then(function(resp){
        createPuppy(resp.data);
      })
    };

    var createPuppy = function createPuppy(puppy){
      puppy.breed = breedService.findBreed(puppy.breed_id);
      puppy.url = "https://ajax-puppies.herokuapp.com/puppies/" + puppy.id +".json"
      puppies.unshift(puppy);
    };

    return {
      puppies: getPuppies,
      adopt: adoptPuppy,
      post: postPuppy
    };

  }]);
