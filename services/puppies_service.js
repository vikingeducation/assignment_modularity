pup.factory('puppiesService', ['$http', 'breedsService', function($http, breedsService) {

  function Puppy(name, breed) {
    this.name = name;
    this.breed_id = breed;
  }


  var stub = {};

  var _puppies = [];

  stub.makePuppy = function (name, breed) {
    return new Puppy(name, breed);
  };

  stub.getPuppies = function() {
    return _puppies;
  };

  stub.requestPuppies = function() {
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json'
    }).then( function(response) {
      _puppies.splice(0, 0);
      for (var i = 0; i < response.data.length; i++) {
        
        _puppies.push(response.data[i]);
      }
      console.log("puppies fully loaded");
    });
  };

  stub.postPuppy = function(puppy) {
    return $http({
      method: 'POST',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json',
      data: puppy
    }).then(function(response) {
      var breedsList = breedsService.getBreeds();
      var puppyBreed = {};
      breedsList.forEach(function(element){
        if (element.id === response.data.breed_id) {
          puppyBreed = element;
        }
      });

      var newPuppy = {
        name: response.data.name,
        id: response.data.id,
        breed: puppyBreed
      };
      _puppies.push(newPuppy);
      console.log("puppy posted!");
    });
  };

  stub.deletePuppy = function(puppy) {
    console.log("hi im deleting stuff");
    console.log(puppy.id);
    var url  = 'https://ajax-puppies.herokuapp.com/puppies/' + puppy.id + '.json'
    return $http.delete(url).then(function(response) {
      console.log(response);
      console.log("puppy adopted!");
    });
    // return $http({
    //   method: 'DELETE',
    //   url: 'https://ajax-puppies.herokuapp.com/puppies/' + id + '.json'
    // }).then(function(response) {
    //   console.log("puppy adopted!");
    // });
  };

  return stub;
}]);