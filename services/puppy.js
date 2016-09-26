app.factory("Puppy", ["$http", function($http) {

  var createPuppy = function(puppyObj){
    var url = "https://ajax-puppies.herokuapp.com/puppies.json"
    $http.post
  }


  return {
    createPuppy: createPuppy
  }

}]);