"use strict";
app.controller("puppyCtrl", ['$scope',
                             'breedsService',
                             'puppiesService',
                             function($scope, breedsService, puppiesService) {

  $scope.puppyList = puppiesService.getPuppies();
  breedsService.getBreeds();
  $scope.breedList = breedsService.breedList();
  console.log($scope.breedList);

  $scope.adoptPuppy = function(pup) {
    return puppiesService.adoptPuppy(pup);
  };
}])