pupApp.controller("PuppyCtrl", ['$scope', '$window', 'breedService', 'puppyService', function($scope, $window, breedService, puppyService){
  $scope.breeds = [];
  $scope.puppies = [];
  $scope.formData = {};

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

  $scope.createPuppy = function(){
    puppyService.createPuppy($scope.formData).then(function(data){
      $window.console.log(data.data);
      data.data.breed = {};
      data.data.breed.name = $scope.findBreed(data.data.breed_id);
      $scope.puppies.push(data.data);
      delete $scope.formData.name;
      delete $scope.formData.breed;
    });
  };

  $scope.findBreed = function(id){
    for (var i = 0; i < $scope.breeds.length; i++){
      if ($scope.breeds[i].id === id){
        return $scope.breeds[i].name;
      };
    };
  };

}]);
