pupShelter.controller('shelterCtrl', [ '$scope', 'breedService', 'puppyService', function($scope, breedService, puppyService) {

  $scope.breeds = [];
  $scope.puppies = [];

  breedService.fetchBreeds(function() {
    $scope.breeds = breedService.getBreeds();
  });

  puppyService.fetchPuppies(function() {
    $scope.puppies = puppyService.getPuppies();
    console.log($scope.puppies);
  });

}]);
