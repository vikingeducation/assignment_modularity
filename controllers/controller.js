pup.controller('PupCtrl', ['$scope', 'breedsService', function($scope, breedsService) {

  breedsService.requestBreeds();
  $scope.breedsList = breedsService.getBreeds();


}]);