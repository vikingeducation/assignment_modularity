puppies.factory('puppyService', ['$http', function($http){
  var puppies = [];

  var getPuppies = function getPuppies(){
    return $http.get('https://ajax-puppies.herokuapp.com/puppies.json')
                .then(function(resp){
                  angular.copy(resp.data, puppies);
                  return puppies
                })
  };

  var _deletePuppy = function _deletePuppy(puppy){
    var index = puppies.indexOf(puppy)
    puppies.splice(index, 1);
  }

  var adoptPuppy = function adoptPuppy(puppy){
    return $http({
                  method:'DELETE',
                  url: puppy.url
                })
                .then(function(){
                  _deletePuppy(puppy);
                });
  }

  return {
    puppies: getPuppies,
    adopt: adoptPuppy
  }
}])
