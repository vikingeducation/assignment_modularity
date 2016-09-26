pup.controller('PupCtrl', ['$scope', 'breedsService', function($scope, breedsService) {

  $scope.breedsList = breedsService.getBreeds();

  $scope.init = function () {
    breedsService.requestBreeds();
  };



  


}]);