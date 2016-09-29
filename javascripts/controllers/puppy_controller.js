puppyApp.controller("PuppiesCtrl", ['$scope', 'breedService', 'puppyService', function($scope, breedService, puppyService){

  $scope.puppies = puppyService.getPuppies();

  $scope.breeds = breedService.getBreeds();

  $scope.currentFilter = 'name';

  $scope.createPuppy = function(){
    console.log($scope.breedId);
    puppyService.createPuppy($scope.name, $scope.breedId);

    $scope.name = "";
    $scope.breedId = "";
  }

  $scope.deletePuppy = function(id){
    puppyService.deletePuppy(id);
    
  }

  $scope.setFilter = function(passedFilter){
    if($scope.filter === passedFilter){
      $scope.currentFilter = "-" + passedFilter;
    } else {
      $scope.currentFilter = passedFilter;
    }
  }
}]);