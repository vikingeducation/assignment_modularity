var app = angular.module('FrontEndAPI', []);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.controller('FrontEndCtrl',
['$scope', '$http', 'BreedService', 'PuppyService',
function($scope, $http, BreedService, PuppyService) {

  // Breeds
  BreedService.all();

  // Puppies
  PuppyService.all();

  $scope.sortBy = "";
  $scope.orderFlag = false;
  $scope.flipFlag = function(){
    $scope.orderFlag = !$scope.orderFlag;
  };

  $scope.orderType = function(input){
    $scope.sortBy = input;
    $scope.flipFlag();
  };

  $scope.puppies = PuppyService.puppies;
  $scope.breeds = BreedService.breeds;
  $scope.adoptPuppy = PuppyService.destroy;
  $scope.createPuppy = PuppyService.create;
  $scope.refreshPuppies = PuppyService.all;

}]);
