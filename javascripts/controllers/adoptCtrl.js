console.log("adoptCtrl loaded");
pupHub.controller('adoptCtrl', [ '$scope', 'breedService', 'puppyService', function($scope, breedService, puppyService) {
  breedService.populateBreeds();
  puppyService.populatePuppies();
  $scope.breeds = breedService.getBreeds();
  $scope.puppies = puppyService.getPuppies();

  $scope.addPuppy = function(puppy) {
    puppyService.addPuppy(puppy);
  };


}]);
