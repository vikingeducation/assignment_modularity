console.log("puppyService loaded");
pupHub.factory('puppyService', ['$http', function($http) {
  var puppies = [];

  var getPuppies = function() {
    fetchPuppies();
    return puppies;
  };

  var getAll = function() {
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json'
    });
  };

  var fetchPuppies = function() {
    getAll().then(function successCallback(response) {
      puppies = response.data;
    }, function errorCallback(response) {
      console.log("ERROR: " + response);
    });
  };

  return {
    getPuppies: getPuppies,
    getAll: getAll,
    fetchPuppies: fetchPuppies,
  };
}]);
