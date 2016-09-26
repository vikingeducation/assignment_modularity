app.factory("Puppy", ["$http", function($http) {

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
  }


  return {
    createPuppy: createPuppy
  }

}]);