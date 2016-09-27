pup.controller('PupCtrl', ['$scope', 'breedsService', 'puppiesService', function($scope, breedsService, puppiesService) {

  breedsService.requestBreeds();
  puppiesService.requestPuppies();

  $scope.breedsList = breedsService.getBreeds();
  $scope.puppiesList = puppiesService.getPuppies();

  $scope.submitPuppy = function() {
    var newPuppy = puppiesService.makePuppy($scope.newPuppy.name, $scope.newPuppy.breed);
    puppiesService.postPuppy(newPuppy);
    $scope.newPuppy = {};
  };

  $scope.adoptPuppy = function(id) {
    console.log(id);
    puppiesService.deletePuppy(id);
  }

}]);