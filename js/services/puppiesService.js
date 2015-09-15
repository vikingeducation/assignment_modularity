app.factory('puppies', ['$http', function($http){

  var obj = {};

  obj.getAll = function(){
    return $http.get('https://pacific-stream-9205.herokuapp.com/puppies.json');
  };

  obj.registerPuppy = function(breed, name){
    return $http.post('https://pacific-stream-9205.herokuapp.com/puppies.json', {name: name, breed_id: breed})
  }

  return obj;

}]);
