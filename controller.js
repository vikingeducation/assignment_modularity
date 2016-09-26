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

  $scope.filterPuppiesByName = function(pup) {
    var filtered_breeds = $scope.breedList.filter(function(el){
      return el.name == pup.breed_name;
    })
    return filtered_breeds
  }

  $scope.createBreed = function(data) {
    breedsService.createBreed(data)
  }

  $scope.createPuppy = function(pup) {
    var filtered_breeds = $scope.filterPuppiesByName(pup)
    if (filtered_breeds.length === 0) {
      // create new breed here!
      $scope.createBreed({ name: pup.breed_name })
      // get breed id and then make puppy

    } else {
  	 pup.breed_id = filtered_breeds[0].id;
    }
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