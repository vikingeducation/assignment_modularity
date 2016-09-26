ajaxPuppies.controller("PuppiesCtrl", ["$scope", "puppiesService", "breedsService", function($scope, puppiesService, breedsService) {

  breedsService.getBreeds().then(function(breeds) {
    $scope.breeds = breeds;
  });

  puppiesService.getPuppies().then(function(puppies) {
    $scope.puppies = puppies;
  });

  $scope.sortBy = "";

  $scope.updatePuppies = function() {
    puppiesService.populatePuppies()
  }

  $scope.createPuppy = function() {

    var puppy = {
      name: $scope.puppyName,
      breed_id: breedsService.getBreedByName($scope.puppyBreed).id
    }
    if (puppy.breed_id) {
      $scope.puppyName = "";
      $scope.puppyBreed = "";
      puppiesService.createPuppy(puppy);
      $scope.errorMessage = "";
    } else {
      $scope.errorMessage = "Not a breed"
    }
  };

}])
