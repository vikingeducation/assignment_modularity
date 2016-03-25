puppyAPI.controller('puppiesCtrl',
    ['$scope', 'PuppyService',
    function($scope, PuppyService) {
      $scope.getPuppies = function() {
        PuppyService.getPuppies().then(function(puppies) {
          $scope.puppies = puppies.sort(function(p1,p2) {
            if (p1.created_at < p2.created_at) {
              return 1;
            } else {
              return -1;
            }
          });
        });
      };

      PuppyService.getBreeds().then(function(breeds) {
        $scope.breeds = breeds;
      });

      $scope.createPuppy = function(name, breed) {
        PuppyService.createPuppy(name, breed).then(function() {
          $scope.getPuppies();
          $scope.newName = "";
          $scope.newBreedId = null;
        });
      };

      $scope.killPuppy = function(puppy) {
        console.log("HI");
        PuppyService.killPuppy(puppy.id).then(function() {
          $scope.puppies.splice($scope.puppies.indexOf(puppy),1);
        });
      };

      $scope.currentSort = '';

      $scope.puppySorter = {
        All: '',
        Name: 'name',
        Breed: 'breed.name'
      };

      // PuppyService.createDemon();

      $scope.getPuppies();
    }]);
