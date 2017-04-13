console.log("adoptCtrl loaded");
pupHub.controller('adoptCtrl', [ '$scope', 'breedService', 'puppyService', function($scope, breedService, puppyService) {
  breedService.populateBreeds();
  $scope.breeds = breedService.getBreeds();
  $scope.puppies = [];


}]);
