var puppies = angular.module('puppies', []);

puppies.controller('PuppiesCtrl', [
  "$scope", "breedService", "puppyService", function($scope, breedService, puppyService) {
    $scope.breeds;
    $scope.puppies;
    breedService.getAll().then(function(object) {
      $scope.breeds = object.data;
    });


    $scope.showPuppies = function() {
      console.log(this.puppies);
    }
    $scope.submitNewPuppy = function(name, breed) {
      var puppy = { name: name, breed_id: breed };
      console.log(puppy)
      puppyService.registerNew(puppy);
      $scope.refreshPuppies(); // new puppy doesn't show up on table
      $scope.puppyName = "";
      $scope.puppyBreed = "?";
    }
    $scope.refreshPuppies = function() {
      console.log('refreshing')
      puppyService.getAll().then(function(object) {
        $scope.puppies = object.data;
      })
    }
    $scope.deletePuppy = function(id) {
      console.log('deleting' + id)
      puppyService.delete(id);
      $scope.refreshPuppies();
    }

    //intializing
    $scope.refreshPuppies();
  }])


puppies.factory("breedService", ['$http', function($http) {
  var breeds = {};

  breeds.getAll = function() {
    return $http.get("https://ajax-puppies.herokuapp.com/breeds.json")
  }

  return breeds;
}]);


//get post and delete on puppies
puppies.factory("puppyService", ['$http', function($http) {
  var puppies = {};

  var _puppies = [];

  puppies.registerNew = function(puppy) {
    $http({
          method: "POST",
          url: "https://ajax-puppies.herokuapp.com/puppies.json",
          data: puppy
          });
  }

  puppies.getAll = function() {
    return $http.get("https://ajax-puppies.herokuapp.com/puppies.json");
  }

  puppies.delete = function(id) {
    $http({
      method: "DELETE",
      url: "https://ajax-puppies.herokuapp.com/puppies/" + id + ".json"
    })
  }

  return puppies;
}]);

// to render a puppy description in list with adopt link
puppies.directive()