puppy.factory('breedService', ['$http', function($http){

  var _allBreeds = {};

  var _getBreeds = function(){
    return $http({
      method: 'GET',
      url: 'https://pacific-stream-9205.herokuapp.com/breeds.json'
    });
  };

  var _parseResponse = function(data){
    angular.forEach(data, function(breed){
      _allBreeds[breed.id] = breed.name;
    });
  };

  var init = function(){
    return _getBreeds().then(function(response){
      _parseResponse( response.data );
    }, function(response){
      console.log("Error getting breeds");
    });
  };

  var allBreeds = function(){
    return _allBreeds;
  };

  var lookup = function(id){
    return _allBreeds[id];
  };

  var createBreed = function(name){
    var breedData = JSON.stringify({
      name: name
    });

    return $http({
      method: 'POST',
      url: 'https://pacific-stream-9205.herokuapp.com/breeds.json',
      data: breedData
    }).then(function(response){
      _parseResponse( response.data );
    },function(response){
      console.log(response.status);
      console.log("Error creating breed");
    });    
  };

  return {
    init: init,
    allBreeds: allBreeds,
    lookup: lookup,
    createBreed: createBreed
  };

}]);

