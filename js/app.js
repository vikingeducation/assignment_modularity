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

  $scope.newPuppySuccess = function(response) { // SUCCESS
    $scope.puppies.push(response.data)
    console.log("success")
    $scope.newPuppies = response.data
  }
  $scope.newPuppyFailure = function(response) { // ERROR
    console.log("failure")
    $scope.newPuppies = response.data
  }

  $scope.breedPromise = breeds.getBreeds();

  $scope.breedPromise.then($scope.breedSuccess, $scope.breedFailure);

  $scope.puppyPromise = puppies.getPuppies();

  $scope.puppyPromise.then($scope.puppySuccess, $scope.puppyFailure);

  $scope.createPuppy = function(data){
    puppies.addPuppy(data).then($scope.newPuppySuccess, $scope.newPuppyFailure);
  }



  // $scope.newPuppyPromise.then($scope.newPuppySuccess, $scope.newPuppyFailure);



}])