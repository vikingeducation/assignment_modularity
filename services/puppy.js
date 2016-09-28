app.factory("Puppy", ["$http", function($http) {

  var _puppies = []

  var createPuppy = function(puppyObj){
    var url = "https://ajax-puppies.herokuapp.com/puppies.json"
    $http.post(url, JSON.stringify(puppyObj))
    .success(function(data) {
      getPuppies();
      return data
    })
    .error(function(data) {
      console.log("No puppy for you");
      console.log(data);
    })
  };

  var getPuppiesJSON = function(){
    var url = "https://ajax-puppies.herokuapp.com/puppies.json"
    $http.get(url)
    .success(function(data){
      _puppies.splice(0, _puppies.length)
      for (var i = 0; i < data.length; i++) {
        var puppy = {}
        puppy.name = data[i].name;
        puppy.breed = data[i].breed.name;
        puppy.created_at = data[i].created_at;
        puppy.id = data[i].id;
        _puppies.push(puppy);
      }
    })
    .error(function(){
      console.log("Failed!");
    })
  };

  var adoptPuppy = function(puppy) {
    var url = "https://ajax-puppies.herokuapp.com/puppies/" + puppy.id + ".json"
    $http.delete(url)
    .success(function(data) {
      console.log("Puppy number " + puppy.id + "has been adopted!");
      getPuppies();
    })
    .error(function(data) {
      console.log("You cannot adopt!");
    })
  }

  var getPuppies = function(){
    getPuppiesJSON();
    return _puppies;
  }






  return {
    createPuppy: createPuppy,
    getPuppies: getPuppies,
    adoptPuppy: adoptPuppy
  }

}]);