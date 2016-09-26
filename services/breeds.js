app.factory("Breeds", ["$http", function($http) {

  var _breeds = [];
  var _getBreedsObject = function() {
    var url = "https://ajax-puppies.herokuapp.com/breeds.json"
    $http.get(url)
    .success(function(data) {
      for(var i = 0; i < data.length; i++) {
        var breedObject = {};
        breedObject[data[i].name] = data[i].id;
        _breeds.push(breedObject);
      }
    });
  };

  return {
    getBreeds: function() {
      _getBreedsObject();
      return _breeds;
    }
  }

}])