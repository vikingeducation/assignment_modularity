

var puppies = angular.module('puppyApp', []);

puppies.controller( 'PuppyCtrl', [
  '$scope', '$http', 'puppyDataService', 'breedsDataService',
  function( $scope, $http, puppyDataService, breedsDataService ) {

    $scope.breeds = [];
    $scope.puppies = [];

    breedsDataService.getBreeds()
    .then(function successCallback(response) {
      $scope.breeds = response.data;
      console.log($scope.breeds);
    }, function errorCallback(response) {
      // console.error(response);
    });

    console.log($scope.breeds);

    puppyDataService.getPuppies()
    .then( function successCallback(response) {
      // $scope.puppies = response.data;
      // console.log(response.data);
      response.data.forEach(function( puppyObj){
        var tempPuppyObj = {
          name: puppyObj['name'],
          breed: puppyObj['breed']['name']
        }
        $scope.puppies.push(  tempPuppyObj );
      });

    }, function errorCallback(response) {
      console.error(response);
    });

    // console.log($scope.puppies);

    $scope.createPuppy = function(name,breed) {
      puppyDataService.createPuppy(name,breed);
    }

  }
]);
