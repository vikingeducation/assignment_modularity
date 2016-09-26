pup.controller('PupCtrl', ['$scope', 'breedsService', 'puppiesService', function($scope, breedsService, puppiesService) {

  breedsService.requestBreeds();
  puppiesService.requestPuppies();

  $scope.breedsList = breedsService.getBreeds();
  $scope.puppiesList = puppiesService.getPuppies();


}]);