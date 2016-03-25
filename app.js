

var puppies = angular.module('puppyApp', []);

puppies.controller( 'PuppyCtrl', [
  '$scope', '$http', 'puppyDataService', 'breedsDataService',
  function( $scope, $http, puppyDataService, breedsDataService ) {

    // var puppyPromise = puppyDataService.apiPuppies();

    // $scope.puppies = puppyDataService.getPuppies();
    $scope.breeds = [];
    $scope.puppies = [];

    breedsDataService.getBreeds()
    .then(function successCallback(response) {
      $scope.breeds = response.data;
      console.log($scope.breeds);
    }, function errorCallback(response) {
      console.error(response);
    });

    console.log($scope.breeds);

    puppyDataService.getPuppies()
    .then( function successCallback(response) {
      $scope.puppies = response.data;
      console.log($scope.puppies);
    }, function errorCallback(response) {
      console.error(response);
    });

    console.log($scope.puppies);

    $scope.createPuppy = function(name,breed) {
      puppyDataService.createPuppy(name,breed);
    }

  }
]);
