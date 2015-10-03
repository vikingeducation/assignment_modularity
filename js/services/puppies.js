puppyShelter.factory('puppies',
  ['$http', function($http) {

  var puppies = {};

  puppies.index = function() {
    return $http({
      method: 'GET',
      url: "https://pacific-stream-9205.herokuapp.com/puppies.json"
    });
  }

  puppies.create = function() {

  }

  puppies.destroy = function() {

  }

  return puppies;
}]);