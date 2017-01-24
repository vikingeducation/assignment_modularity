pupShelter.controller('shelterCtrl', [ '$scope', 'breedService', function($scope, breedService) {

  $scope.breeds = [];

  breedService.fetchBreeds(function() {
    $scope.breeds = breedService.getBreeds();
  });

}]);
