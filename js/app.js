var puppiesAPI = angular.module("puppiesAPI", [])


puppiesAPI.controller('puppiesCtrl', ['$scope','breeds', 'puppies', function($scope, breeds, puppies){

  $scope.breedSuccess = function(response) { // SUCCESS
    console.log("success")
    $scope.breeds = response.data
  }
  $scope.breedFailure = function(response) { // ERROR
    console.log("failure")
    $scope.breeds = response.data
  }

  $scope.puppySuccess = function(response) { // SUCCESS
    console.log("success")
    $scope.puppies = response.data
  }
  $scope.puppyFailure = function(response) { // ERROR
    console.log("failure")
    $scope.puppies = response.data
  }

  $scope.breedPromise = breeds.getBreeds();

  $scope.breedPromise.then($scope.breedSuccess, $scope.breedFailure);

  $scope.puppyPromise = puppies.getPuppies();

  $scope.puppyPromise.then($scope.puppySuccess, $scope.puppyFailure);



}])