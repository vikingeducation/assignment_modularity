pupApp.controller("PuppyCtrl", ['$scope', '$window', 'breedService', 'puppyService', function($scope, $window, breedService, puppyService){
  $scope.breeds = [];
  $scope.puppies = [];

  $scope.getBreeds = function(){
    var breeds = [];
    breedService.getBreeds().then(function(data){
      $scope.breeds = data.data;

    });
    return breeds;
  };
  $scope.getBreeds();

  $scope.getPuppies = function(){
    puppyService.getPuppies().then(function(data){
      $scope.puppies = data.data;
      console.log(data.data);
    });
  };

  $scope.adoptPuppy = function(id){

    puppyService.adoptPuppy(id).then(function(data){
      $window.console.log(data.data.id);
      for (var i = 0; i < $scope.puppies.length; i++) {
        if ($scope.puppies[i].id === data.data.id) {
          $scope.puppies.splice(i, 1);
          break;
        };
      };
    });
  };

}]);
