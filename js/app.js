var puppiesAPI = angular.module("puppiesAPI", [])


puppiesAPI.controller('puppiesCtrl', ['$scope','breeds', 'puppies', function($scope, breeds, puppies){

  $scope.breedSuccess = function(response) { // SUCCESS
    console.log("success")
    $scope.breeds = response.data
  }

  $scope.puppySuccess = function(response) { // SUCCESS
    console.log("success")
    $scope.puppies = response.data
  }

  $scope.newPuppySuccess = function(response) { // SUCCESS
    $scope.puppies.push(response.data)
    console.log("success")
  }

  $scope.adoptPuppySuccess = function(response) { // SUCCESS
    for (var i = 0; i < $scope.puppies.length; i++) {
      if ($scope.puppies[i].id === response.data.id) {
        $scope.puppies.splice(i, 1);
        return;
      }
    };
  }
  $scope.genericFailure = function(response) { // ERROR
    console.log(response.data)
  }

  $scope.breedPromise = breeds.getBreeds();

  $scope.breedPromise.then($scope.breedSuccess, $scope.genericFailure);

  $scope.puppyPromise = puppies.getPuppies();

  $scope.puppyPromise.then($scope.puppySuccess, $scope.genericFailure);

  $scope.createPuppy = function(data){
    puppies.addPuppy(data).then($scope.newPuppySuccess, $scope.genericFailure);
  }

  $scope.adoptPuppy = function(id) {
    puppies.adoptPuppy(id).then($scope.adoptPuppySuccess, $scope.genericFailure)
  }



}])