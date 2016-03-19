puppy.controller('PuppyCtrl', ['$scope', 'puppyService', 'breedService',
  function($scope, puppyService, breedService){

  var init = function(){
    puppyService.init().then(function(){
      $scope.puppies = puppyService.allPuppies();
    });

    breedService.init().then(function(){
      $scope.breeds = breedService.allBreeds();
    });

    $scope.orderBy = 'created_at';
    $scope.orderByReverse = true; 
  };

  $scope.setupBreed = function(){
    $scope.breedID = $("datalist option:contains('" + $scope.newPuppyBreed + "')").data("id");

    if ( $scope.breedID ) {
      $scope.createPuppy();

    } else {
      // Doesn't appear possible to create breed at this time, this will fail.
      breedService.createBreed($scope.newPuppyBreed).then(function(response){
        $scope.breedID = response.data.id;

        $scope.createPuppy();
      });
    }

  };

  $scope.createPuppy = function(){
    puppyService.createPuppy($scope.newPuppyName, $scope.breedID).then(function(){
      $scope.newPuppyName = '';
      $scope.newPuppyBreed = '';
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