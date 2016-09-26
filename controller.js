"use strict";
app.controller("puppyCtrl", ['$scope',
                             'breedsService',
                             'puppiesService',
                             function($scope, breedsService, puppiesService) {

  $scope.updatePuppyList = function() {
    puppiesService.getPuppies();
    $scope.puppyList = puppiesService.puppyList();
  };
  $scope.updatePuppyList();


  breedsService.getBreeds();
  $scope.breedList = breedsService.breedList();

  console.log($scope.breedList);

  $scope.adoptPuppy = function(pupID) {
    puppiesService.adoptPuppy(pupID);
    $scope.updatePuppyList();
  };

  $scope.createPuppy = function(pup) {
    return puppiesService.createPuppy(pup);
  };

  $scope.puppy = {};

}])