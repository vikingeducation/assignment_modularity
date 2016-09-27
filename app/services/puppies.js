puppiesApp.factory('puppies', ['$http', function($http) {

  var obj = {};

  var _puppies = [];

  obj.getPuppies = $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json'
    })

  obj.addPuppy = function(name, id) {
    return $http({
      method: 'POST',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json',
      data: JSON.stringify({name: name, breed_id: id}),
      headers: {
        'Content-Type': "application/json"
      }
    })
  };

  obj.deletePuppy = function(id) {
    return $http({
      method: 'DELETE',
      url: 'https://ajax-puppies.herokuapp.com/puppies/' + id + '.json'
    })
  }

  return obj;

}]);
