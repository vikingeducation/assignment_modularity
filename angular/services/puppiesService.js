ajaxPuppies.factory("puppiesService", ["$http", function($http) {

  var getPuppies = function() {
    return $http({
      method: "GET", 
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      dataType: "json"
    })
  }

  var createPuppy = function(puppy) {
    return $http({
      method: "POST", 
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      dataType: "json", 
      data: JSON.stringify(puppy)
    })
  }

  var deletePuppy = function(puppyId) {
    return $http({
      method: "DELETE", 
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      dataType: "json", 
      data: JSON.stringify(puppyId)
    })
  }

  return {
    getPuppies: getPuppies,
    createPuppy: createPuppy,
    deletePuppy: deletePuppy
  }
}])