console.log("adoptCtrl loaded");
pupHub.controller('adoptCtrl', [ '$scope', 'breedService', 'puppyService', function($scope, breedService, puppyService) {
  breedService.populateBreeds();
  puppyService.populatePuppies();
  $scope.breeds = breedService.getBreeds();
  $scope.puppies = puppyService.getPuppies();

  $scope.addPuppy = function(puppy) {
    puppyService.addPuppy(puppy);
  };

  $scope.adoptPuppy = function(dog) {
    puppyService.adoptPuppy(dog);
  };

  $scope.order = 'type';
  
  $scope.sort = function(column) {
    if ($scope.order === column) {
      $scope.direction = !$scope.direction;
    } else {
      $scope.direction = false;
      $scope.order = column;
    }
  };

}]);
