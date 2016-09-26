app.controller("PuppyCtrl", ["$scope", "Breeds", function($scope, Breeds){

  $scope.breeds = Breeds.getBreeds();
  
}])