ajaxPuppies.factory("breedsService", ["$http", function($http) {
  // call API to get brreds list
  var getBreeds = function() {
    return $http({
      method: "GET", 
      url: "https://ajax-puppies.herokuapp.com/breeds.json",
      dataType: "json"
    })
  };

  return {
    getBreeds: getBreeds
  }
}])