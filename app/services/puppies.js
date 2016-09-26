puppiesApp.factory('puppies', ['$http', function($http) {

  var obj = {};

  var _puppies = [];

  obj.getPuppies = function(puppies) {
    $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json'
    }).then(function (response) {
      puppies = response;
    })
  };

  obj.addPuppy = function(name, id) {
    $http({
      method: 'POST',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json',
      data: {name: name, breed_id: id}.to_json,
      headers: {
        'Content-Type': "application/json"
      }
    }).then(function (response) {
      console.log("success")
    })
  };

  obj.deletePuppy = function(id) {
    $http({
      method: 'DELETE',
      url: 'https://ajax-puppies.herokuapp.com/puppies/' + id + '.json'
    }).then(function (response) {
      console.log("success")
    })
  }

  return obj;

}]);