puppiesApp.factory('breeds', ['$http', function($http) {

  var obj = {};

  obj.getBreeds =
    $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/breeds.json'
    })

  return obj;

}]);
