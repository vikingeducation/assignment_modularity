app.controller("PuppyCtrl", ["$scope", "Breeds", "Puppy", function($scope, Breeds, Puppy){

  $scope.breeds = Breeds.getBreedObjects();
  $scope.puppies = Puppy.getPuppies();
  $scope.getFilter = "name";

  $scope.newPuppy = function(){
    var pup = {};
    pup.name = $scope.formData.name;
    pup.breed_id = $scope.formData.breed;
    Puppy.createPuppy(pup);
    //var createdPuppy = Puppy.createPuppy(puppy);
    $scope.formData = {};
  }
  
  $scope.adoptPuppy = function(puppy) {
    Puppy.adoptPuppy(puppy);
  }

  $scope.setFilter = function(option) {
    if ($scope.getFilter === option) {
      $scope.getFilter = "-" + option
    } else {
      $scope.getFilter = option;
    }
  }

  $scope.searchStarted = function(){
    if (angular.element("#breedSearch").$dirty) {
      return true;
    } else {
      return false;
    }
  }

}])