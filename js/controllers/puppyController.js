puppy.controller('PuppyCtrl', ['$scope', 'puppyService', 'breedService',
  function($scope, puppyService, breedService){

  var init = function(){
    puppyService.init().then(function(){
      $scope.puppies = puppyService.allPuppies();
    });

    breedService.init().then(function(){
      $scope.breeds = breedService.allBreeds();
    });
  };

  $scope.createPuppy = function(){
    puppyService.createPuppy($scope.nameInput, $scope.breedInput).then(function(){
      $scope.nameInput = '';
      $scope.breedInput = '';
    });
  };

  $scope.adoptPuppy = function(puppy){
    puppyService.adoptPuppy(puppy);
  };

  $scope.lookupBreed = function(puppy){
    return breedService.lookup(puppy.breed_id);
  };

  init();

}]);