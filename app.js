var puppies = angular.module('puppies', []);

puppies.controller("PuppiesCtrl", ['$scope', '$http', 'puppiesService', 'breedsService', function($scope, $http, puppiesService, breedsService) {

  puppiesService.getPuppiesFromAPI().then(function(response) {
    puppiesService.seedPuppies(response);
    $scope.puppies = puppiesService.getPuppyList();
  }, function(response) {
    console.log("Couldn't get puppies");
  });

  breedsService.getBreedsFromAPI().then(function(response) {
    breedsService.seedBreeds(response);
    $scope.breeds = breedsService.getBreedList();
  }, function(response) {
    console.log("Couldn't get breeds");
  });

  $scope.createPuppy = function() {
    var data = {name: $scope.name, breed_id: $scope.breed};
    puppiesService.createPuppy(data).then(function(response) {
      console.log('puppy created');
    }, function(response) {
      console.log('puppy failed to create');
    });
  };

}]);
