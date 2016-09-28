app.factory("Breeds", ["$http", function($http) {

  var _breedObjects = [];
  var _getBreedsJSON = function() {
    var url = "https://ajax-puppies.herokuapp.com/breeds.json"
    $http.get(url)
    .success(function(data) {
      for(var i = 0; i < data.length; i++) {
        var breedObject = {};
        breedObject.name = data[i].name;
        breedObject.id = data[i].id;
        _breedObjects.push(breedObject);
      }
    });
  };

  return {
    getBreedObjects: function() {
      _getBreedsJSON();
      return _breedObjects;
    }
  }

}])