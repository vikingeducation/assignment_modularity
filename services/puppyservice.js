pupApp.factory("puppyService", ['$http', function($http){
  var obj = {};

  obj.getPuppies = function(){
    return $http.get("https://ajax-puppies.herokuapp.com/puppies.json");
  };

  obj.adoptPuppy = function(id){
    return $http.delete("https://ajax-puppies.herokuapp.com/puppies/" + id.toString() + ".json");
  }

  return obj;
}]);
