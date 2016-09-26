var app = angular.module('FrontEndAPI', []);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.controller('FrontEndCtrl', ['$scope', '$http', 'BreedService',
function($scope, $http, BreedService) {

  console.log(BreedService.all());

}]);
