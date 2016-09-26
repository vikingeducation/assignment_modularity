ajaxPuppies.factory("breedsService", ["$http", function($http) {
  // call API to get brreds list
  var _breeds = [];

  var _populateBreeds = function() {
    return $http({
      method: "GET",
      url: "https://ajax-puppies.herokuapp.com/breeds.json",
      dataType: "json"
    }).then(function(response) {
      return angular.copy(response.data, _breeds)
    })
  };

  var getBreeds = function() {
    if (_breeds.length) {
      return _breeds;
    } else {
      return _populateBreeds();
    }
  }

  return {
    getBreeds: getBreeds
  }
}])
