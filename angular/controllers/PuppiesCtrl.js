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
    var breed = breedsService.getBreedByName($scope.puppyBreed);

    if (breed) {
      var puppy = {
        name: $scope.puppyName,
        breed_id: breed.id
      };

      puppiesService.createPuppy(puppy);
      $scope.puppyName = "";
      $scope.puppyBreed = "";
    } else {
      var breed = {
        name: $scope.puppyBreed,
      };

      var newBreed = breedsService.createBreed(breed).then(function(response) {
        var puppy = {
          name: $scope.puppyName,
          breed_id: response.id
        };
        puppiesService.createPuppy(puppy);
        $scope.puppyName = "";
        $scope.puppyBreed = "";
      })
    }
  };

}])
