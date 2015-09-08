puppers.factory('breeds', ['$http', function($http) {
  var obj = {};

  obj.all = function() {
    return $http.get("https://pacific-stream-9205.herokuapp.com/breeds.json").then(function (response){
      return response.data;
    });
  };

  return obj;
}]);
