pup.factory('puppiesService', ['$http', function($http) {

  function Puppy(name, breed) {
    this.name = name;
    this.breed = breed;
  }


  var stub = {};

  var _puppies = [];

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

  // stub.postPuppy = function(puppy) {
  //   var newPuppy = new Puppy(puppy.name, puppy.breed);
  //   return $http({
  //     method: 'POST',
  //     url: 'https://ajax-puppies.herokuapp.com/puppies.json',
  //     data: { puppy: puppy}
  //   })
  // };

  return stub;
}]);