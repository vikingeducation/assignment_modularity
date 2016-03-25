puppies.factory('puppiesService', ['$http', function($http) {
  var obj = {};
  var _puppies = [];

  obj.seedPuppies = function(response) {
    console.log('seeding puppies');
    response.data.forEach(function(puppy) {
      var newPuppy = {};
      newPuppy.name = puppy.name;
      newPuppy.breed = puppy.breed.name;
      newPuppy.created_at = puppy.created_at;
      _puppies.push(newPuppy);
    });
  };

  obj.getPuppiesFromAPI = function(data) {
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json',
      data: data
    })
  };

  obj.getPuppyList = function () {
    return _puppies;
  };

  obj.createPuppy = function() {
    return $http({
      method: 'POST',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json',

    })
  }

  return obj;
}])