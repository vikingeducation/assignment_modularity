app.controller("PuppyCtrl", ["$scope", "Breeds", "Puppy", function($scope, Breeds, Puppy){

  $scope.breeds = Breeds.getBreedObjects();
  $scope.puppies = Puppy.getPuppies();

  $scope.newPuppy = function(){
    var pup = {};
    pup.name = $scope.formData.name;
    pup.breed_id = $scope.formData.breed;
    Puppy.createPuppy(pup);
    //var createdPuppy = Puppy.createPuppy(puppy);
    $scope.formData = {};
    Puppy.getPuppies();
  }
  
}])