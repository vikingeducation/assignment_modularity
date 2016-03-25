
puppies.factory( 'puppyDataService', [ '$http', function($http) {
  var obj = {};

  var _puppies = [];

  obj.getPuppies = function() {
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json'
    })
  }

  obj.createPuppy = function(name, breed_id) {
    console.log(name);
    console.log(breed_id);
    $http({
      method: "POST",
      data: { name: name, breed_id: breed_id },
      url: 'https://ajax-puppies.herokuapp.com/puppies.json'
    }).then( function successCallback(response) {

      console.log( "success - created puppy" );

    }, function errorCallback(response) {

      console.log( "error - didn't create puppy")

    });
  }

  obj.adoptPuppy = function(id) {
    $http({
      method: "DELETE",
      url: 'https://ajax-puppies.herokuapp.com/puppies/' + id + '.json'
    }).then( function successCallback(response) {

      console.log( "success - deleted puppy" );

    }, function errorCallback(response) {

      console.log( "error - didn't delete puppy")

    });
  }

  return obj;
}]);
