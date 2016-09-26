app.controller("puppyCtrl", ['$scope',
                             'breedsService',
                             'puppiesService',
                             function($scope, breedsService, puppiesService) {

  $scope.puppyList = puppiesService.getPuppies();
  $scope.breedList = breedsService.breeds;
  console.log($scope.breedList)

  $scope.adoptPuppy = function(pup) {
    return puppiesService.adoptPuppy(pup);
  };
}])