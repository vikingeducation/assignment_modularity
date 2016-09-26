app.controller("PuppyCtrl", ["$scope", "Breeds", "Puppy", function($scope, Breeds, Puppy){

  $scope.breeds = Breeds.getBreedObjects();

  $scope.newPuppy = function(){
    var pup = {};
    pup.name = $scope.formData.name;
    pup.breed_id = $scope.formData.breed;
    console.log($scope.formData);
    Puppy.createPuppy(pup);
    //var createdPuppy = Puppy.createPuppy(puppy);
    $scope.formData = {};
  }
  
}])