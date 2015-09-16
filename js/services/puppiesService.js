app.factory('puppies', ['$http', function($http){

  var obj = {};

  // GET request to get puppy list
  obj.getAll = function(){
    return $http.get('https://pacific-stream-9205.herokuapp.com/puppies.json');
  };

  // POST request to add puppy
  obj.registerPuppy = function(breed, name){
    return $http.post('https://pacific-stream-9205.herokuapp.com/puppies.json', {name: name, breed_id: breed});
  };

  // DELETE request to delete puppy
  obj.adoptPuppy = function(puppy){
    var targetStr = 'https://pacific-stream-9205.herokuapp.com/puppies/';
    console.log(puppy);
    return $http.delete(targetStr+puppy.id+'.json');
  };

  return obj;

}]);
