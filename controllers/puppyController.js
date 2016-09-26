app.controller("PuppyCtrl", ["$scope", "Breeds", function($scope, Breeds){

  $scope.breeds = Breeds.getBreedObjects();

  $scope.newPuppy = function(){
    var puppy = {}
    puppy.name = $scope.formData.name
    puppy.breedID = $scope.formData.breed
    
  }
  
}])