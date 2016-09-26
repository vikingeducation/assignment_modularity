puppiesApp.factory('breeds', ['$http', function($http) {

  var obj = {};

  obj.getBreeds = function() {
    $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/breeds.json'
    }).then(function (response) {
      return response;
    })
  };

  return obj;

}]);