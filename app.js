

var puppies = angular.module('puppyApp', []);

puppies.controller( 'PuppyCtrl', [
  '$scope', '$http', 'puppyDataService', 'breedsDataService',
  function( $scope, $http, puppyDataService, breedsDataService ) {

    $scope.puppiesList = []
    var responsePuppies;
    var responseBreeds;

    $scope.getPuppies = function() {
      responsePuppies = puppyDataService.apiPuppies();
    };

    $scope.getBreeds = function() {
      responseBreeds = breedsDataService.apiBreeds();
    };

    $scope.init = function () {
      $scope.getBreeds();
      $scope.getPuppies();
    }

    $scope.init();


  }
]);
