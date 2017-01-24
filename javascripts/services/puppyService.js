pupShelter.factory('puppyService', ['$http', function($http) {
  var puppies = [];

  var getPuppies = function() {
    return puppies;
  };

  var getAll = function() {
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json'
    });
  };

  var fetchPuppies = function(callback) {
    getAll().then(function successCallback(response) {
      puppies = response.data;
      callback();
    }, function errorCallback(response) {
      console.log(response);
    });
  };

  return {
    fetchPuppies: fetchPuppies,
    getPuppies: getPuppies,
  };
}]);
