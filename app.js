var puppies = angular.module('puppies', []);

puppies.controller('PuppiesCtrl', [
  "$scope", "breedService", "puppyService", function($scope, breedService, puppyService) {
    $scope.breeds;
    $scope.puppies;
    breedService.getAll().then(function(object) {
      $scope.breeds = object.data;
    });

    puppyService.getAll().then(function(object) {
      $scope.puppies = object.data
    })
    $scope.showPuppies = function() {
      console.log(this.puppies);
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

  puppies.getAll = function() {
    return $http.get("https://ajax-puppies.herokuapp.com/puppies.json");
  }

  return puppies;
}]);

// to render a puppy description in list with adopt link
puppies.directive()