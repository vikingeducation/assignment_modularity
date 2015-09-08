puppers.factory('puppies', ['$http', function($http) {
  var obj = {};

  obj.all = function() {
    return $http.get("https://pacific-stream-9205.herokuapp.com/puppies.json").then(function (response){
      return response.data;
    });
  };

  obj.remove = function(pupID) {
    return $http.delete("https://pacific-stream-9205.herokuapp.com/puppies/" + pupID + ".json");
  };

  return obj;
}]);
