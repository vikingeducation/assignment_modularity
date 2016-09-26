puppiesApp.controller('PuppiesCtrl', ['$scope', 'puppies', 'breeds', function($scope, puppies, breeds) {

  $scope.puppies;
  puppies.getPuppies($scope.puppies);
  $scope.breeds = breeds.getBreeds();

  $scope.addPuppy = function() {
    var name = $scope.newPuppy.name;
    var breed_id = $scope.newPuppy.breed_id;
    puppies.addPuppy(name, breed_id);
  };

  $scope.adoptPuppy = function(puppy) {
    puppies.deletePuppy(puppy);
  };

}]);
