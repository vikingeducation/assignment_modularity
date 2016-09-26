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
    puppiesService.adoptPuppy(pupID).then(
    	$scope.updatePuppyList);
  };

  $scope.createPuppy = function(pup) {
    return puppiesService.createPuppy(pup).then(
    	$scope.updatePuppyList);
  };

  $scope.puppy = {};

  $scope.currentOrder = [];

  $scope.changeOrder = function(category) {

      console.log($scope.currentOrder)
    if($scope.currentOrder[0] == category) {
      if($scope.currentOrder[1] == "+") {
        $scope.currentOrder[1] = "-";
      } else {
        $scope.currentOrder[1] = "+";
      }
    } else {
      $scope.currentOrder[0] = category;
      $scope.currentOrder[1] = "+";
    }
  };
}])