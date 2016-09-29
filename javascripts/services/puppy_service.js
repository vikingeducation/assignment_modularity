puppyApp.factory('puppyService',['$http', function($http){

  var service = {};

  var _puppies = [];

  var _getPuppies = function(){
    $http({
      method: "GET",
      url: "https://ajax-puppies.herokuapp.com/puppies.json"
    }).then(function successCallback(response){
      console.log("success getting puppies");
      var puppies = response.data;
      _puppies.splice(0, _puppies.length);
      puppies.forEach(function(puppyObject){
        var puppy = {};
        puppy.name = puppyObject.name;
        puppy.breed = puppyObject.breed;
        puppy.id = puppyObject.id;

        _puppies.push(puppy);

      })
    }, function errorCallback(){

    });
  };

  var _createPuppy = function(name, breedId){
    $http({
      method: "POST",
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      data: JSON.stringify({name: name, breed_id: breedId})
    }).then(function successCallback(response){
      console.log("success creating puppy");
      
      var puppyObject = response.data;
      var puppy = {};
      puppy.name = puppyObject.name;
      puppy.breed = puppyObject.breed;
      puppy.id = puppyObject.id;

      _puppies.unshift(puppy);

      
    }, function errorCallback(){
      console.log("error creating puppy");
    });
  };

  var _deletePuppy = function(id){
    $http({
      method: "DELETE",
      url: "https://ajax-puppies.herokuapp.com/puppies/" + id + ".json"
      //data: JSON.stringify({id: id})
    }).then(function successCallback(response){
      console.log("success deleting puppy");
      foo = response.data;
      
      service.getPuppies();

      
    }, function errorCallback(){
      console.log("error deleting puppy");
    });
  };

  service.getPuppies = function(){
    _getPuppies();
    return _puppies;
  };

  service.createPuppy = function(name, breedId){
    _createPuppy(name, breedId);
    //anglular auto updates no need to get the puppies
  };

  service.deletePuppy = function(id){
    _deletePuppy(id);
    //_getPuppies();
  };



  return service;
}])