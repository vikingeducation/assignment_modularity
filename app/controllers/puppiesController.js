puppyAPI.controller('puppiesCtrl',
    ['$scope', 'PuppyService',
    function($scope, PuppyService) {

      PuppyService.getPuppies().then(function(puppies) {
        $scope.puppies = puppies;
      });

      PuppyService.getBreeds().then(function(breeds) {
        $scope.breeds = breeds;
      });

      $scope.createPuppy = function(name, breed) {
        PuppyService.createPuppy(name, breed);
      };

      $scope.getPuppies = function() {
        PuppyService.getPuppies().then(function(puppies) {
          $scope.puppies = puppies;
        });
      };
    }]);
