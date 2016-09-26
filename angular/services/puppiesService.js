ajaxPuppies.factory("puppiesService", ["$http", function($http) {

  var _puppies = [];

  var _populatePuppies = function() {
    return $http({
      method: "GET",
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      dataType: "json",
    }).then(function(response) {
      return angular.copy(response.data, _puppies);
    })
  };

  var getPuppies = function() {
    if (_puppies.length) {
      return _puppies;
    } else {
      return _populatePuppies();
    }
  }

  var createPuppy = function(puppy) {
    return $http({
      method: "POST",
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      dataType: "json",
      data: JSON.stringify(puppy)
    }).then(function(response) {
      console.log(response);
      _puppies.push(response.data);
      return response.data;
    })
  }

  var _removeFromPupCollection = function(response) {
    var returnedPuppy;
    for (var i = 0; i < _puppies.length; i++) {
      if (_puppies[i].id === response.id) {
        returnedPuppy = _puppies[i];
        _puppies.splice(i, 1);
        break;
      }
    }
    return returnedPuppy;
  };

  var deletePuppy = function(puppyId) {
    return $http({
      method: "DELETE",
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      dataType: "json",
      data: JSON.stringify(puppyId)
    }).then(_removeFromPupCollection)
  }

  return {
    getPuppies: getPuppies,
    createPuppy: createPuppy,
    deletePuppy: deletePuppy,
  }
}])
