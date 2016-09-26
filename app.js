var app = angular.module('FrontEndAPI', []);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.controller('FrontEndCtrl',
['$scope', '$http', 'BreedService', 'PuppyService',
function($scope, $http, BreedService, PuppyService) {

  console.log(BreedService.all());

  console.log(
    PuppyService.create({
      name: 'Some pup',
      breed_id: 113
  }));

}]);
