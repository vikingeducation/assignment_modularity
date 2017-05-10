app.factory('puppiesService', ['$http', function($http){
  // GET request
  var getPuppies = function(){
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json'
    })
  };

  // POST request
  // var createPuppy = function(){
  //   return $http({
  //     method: 'POST',
  //     url: 'https://ajax-puppies.herokuapp.com/puppies.json'
  //   })
  // };

  // DELETE request
  var adoptPuppy = function(puppyId){
    return $http({
      method: 'DELETE',
      url: 'https://ajax-puppies.herokuapp.com/puppies/' + puppyId + '.json',
    })
  };


  return {
    getPuppies: getPuppies,
    adoptPuppy: adoptPuppy
  };
}]);
