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

  $scope.puppies = PuppyService.puppies;
  $scope.breeds = BreedService.breeds;
  $scope.adoptPuppy = PuppyService.destroy;
  $scope.createPuppy = PuppyService.create;
  $scope.refreshPuppies = PuppyService.all;
}]);
