puppyApp.factory('breedService', ['$http', function($http){

  var service = {};

  _breeds = [];

  var _getBreeds = function(){
    
    $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/breeds.json'
    }).then(function successCallback(response) {
        console.log("success");
        breeds = response.data;
        
        breeds.forEach(function(breedObject){
          var breed = {};
          breed.name = breedObject.name;
          breed.id = breedObject.id;

          _breeds.push(breed);
        })

      }, function errorCallback(response) {
        console.log("there was an error getting breeds");
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

    
  }

  service.getBreeds = function(){
    _getBreeds();
    return _breeds;
  }



  return service;
}])