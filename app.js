var puppies = angular.module('puppies', []);

puppies.controller("PuppiesCtrl", ['$scope', '$http', 'puppiesService', 'breedsService', function($scope, $http, puppiesService, breedsService) {

  puppiesService.getPuppiesFromAPI().then(function(response) {
    puppiesService.seedPuppies(response);
    $scope.puppies = puppiesService.getPuppyList();
  }, function(response) {
    console.log("Couldn't get puppies");
  });

  breedsService.getBreedsFromAPI().then(function(response) {
    breedsService.seedBreeds(response);
    $scope.breeds = breedsService.getBreedList();
  }, function(response) {
    console.log("Couldn't get breeds");
  });

  $scope.headers = ['name', 'breed', 'created_at', 'Adopt'];

  $scope.orderHeading = 'name';

  $scope.orderByHeading = function(index) {
    $scope.orderHeading = $scope.headers[index];
  };

  $scope.createPuppy = function() {
    var data = {name: $scope.name, breed_id: $scope.breed};
    puppiesService.createPuppy(data).then(function(response) {
      var newPuppy = response.data;
      var puppyBreed = $.grep($scope.breeds, function(e){ return e.id == newPuppy.breed_id; })[0];
      console.log(puppyBreed);
      newPuppy.breed = puppyBreed.name;
      $scope.puppies.push(newPuppy);
      console.log(newPuppy);
      $scope.name = '';
    }, function(response) {
      console.log('puppy failed to create');
    });
  };

  $scope.deletePuppy = function(puppy) {
    puppiesService.deletePuppy(puppy).then(function(response) {
      $scope.puppies.splice($scope.puppies.indexOf(puppy), 1);
    }, function(response) {
      console.log('puppy failed to delete');
    });
  };

}]);
