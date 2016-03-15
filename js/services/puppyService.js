puppy.factory('puppyService', ['$http', function($http){

  var _allPuppies;

  var _getPuppies = function(){
    return $http({
      method: 'GET',
      url: 'https://pacific-stream-9205.herokuapp.com/puppies.json'
    });
  };

  var init = function(){
    return _getPuppies().then(function(response){
      _allPuppies = response.data;
    },function(response){
      console.log("Error getting pups");
    });
  };

  var allPuppies = function(){
    return _allPuppies;
  };

  var createPuppy = function(name, breedID) {
    var puppyData = JSON.stringify({
      name: name,
      breed_id: breedID
    });

    return $http({
      method: 'POST',
      url: 'https://pacific-stream-9205.herokuapp.com/puppies.json',
      data: puppyData
    }).then(function(response){
      console.log(response.data)
      _allPuppies.push(response.data);
    });
  };

  var adoptPuppy = function(puppy){
    return $http({
      method: 'DELETE',
      url: 'https://pacific-stream-9205.herokuapp.com/puppies/' + puppy.id + '.json'
    }).then(function(response){
      idx = _allPuppies.indexOf(puppy);
      _allPuppies.splice(idx, 1);
    });
  };

  return {
    init: init,
    allPuppies: allPuppies,
    createPuppy: createPuppy,
    adoptPuppy: adoptPuppy
  };

}]);