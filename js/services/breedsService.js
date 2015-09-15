app.factory('breeds', ['$http', function($http){

  var obj = {};

  // GET request to get all breeds
  obj.getAll = function(){
    return $http.get('https://pacific-stream-9205.herokuapp.com/breeds.json');
  };

  return obj;

}]);
