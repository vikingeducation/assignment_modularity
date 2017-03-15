var puppies = angular.module('puppies', []);

puppies.controller('PuppiesCtrl', [
  "$scope", "breedService", "puppyService", function($scope, breedService, puppyService) {
    $scope.breeds;
    $scope.puppies;
    breedService.getAll().then(function(object) {
      $scope.breeds = object.data;
    });


    console.log('refreshing')
    puppyService.getAll().then(function(object) {
      $scope.puppies = object.data;
    })
    // delete later
    $scope.showPuppies = function() {
      console.log(this.puppies);
    }
    $scope.submitNewPuppy = function(name, breed) {
      var puppy = { name: name, breed_id: breed };
      puppyService.registerNew(puppy).then(function(response) {
        var puppy = response.data;
        $scope.puppies.push(puppy);
      })
      $scope.puppyName = "";
      $scope.puppyBreed = "?";
    }

    $scope.deletepuppy = function(id) {
      puppyService.delete(id).then( function(response) {
        var puppy = response.data;
        var i = $scope.puppies.indexOf(puppy);
        $scope.puppies.splice(i, 1);
      })
    }

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
    return $http({
          method: "POST",
          url: "https://ajax-puppies.herokuapp.com/puppies.json",
          data: puppy
          });
  }

  puppies.getAll = function() {
    return $http.get("https://ajax-puppies.herokuapp.com/puppies.json");
  }

  puppies.delete = function(id) {
    console.log("now deleting")
    return $http({
      method: "DELETE",
      url: "https://ajax-puppies.herokuapp.com/puppies/" + id + ".json"
    })
  }

  return puppies;
}]);

// to render a puppy description in list with adopt link
puppies.directive('puppyInfo', function() {
  return {
    templateUrl: "puppyInfo.html",
    restrict: 'A',
    scope: {
      puppy: "=",
      deletepuppy: "&"
    }
  }
})