app.factory("Puppy", ["$http", function($http) {

  var _puppies = []

  var createPuppy = function(puppyObj){
    var url = "https://ajax-puppies.herokuapp.com/puppies.json"
    $http.post(url, JSON.stringify(puppyObj))
    .success(function(data) {
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
        _puppies.push(data[i])
      }
    })
    .error(function(){
      console.log("Failed!");
    })
  };

  var getPuppies = function(){
    getPuppiesJSON();
    return _puppies;
  }






  return {
    createPuppy: createPuppy,
    getPuppies: getPuppies
  }

}]);