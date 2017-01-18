app.factory("puppies", [ "$http", function ($http) {
  var puppies = {};
  var url = "https://ajax-puppies.herokuapp.com/puppies.json";


  puppies.getData = function(){
    return $http.get(url);
  };

  puppies.create = function (data) {
    return $http.post(url, data);
  };

  puppies.delete = function (id){
    return $http.delete("https://ajax-puppies.herokuapp.com/puppies/" + id.id + ".json")
  };

  return puppies;
}]);
