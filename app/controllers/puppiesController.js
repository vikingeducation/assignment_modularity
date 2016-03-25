puppyAPI.controller('puppiesCtrl',
    ['$scope', 'PuppyService',
    function($scope, PuppyService) {

      PuppyService.getPuppies().then(function(puppies) {
        $scope.puppies = puppies;
      });

      PuppyService.getBreeds().then(function(breeds) {
        $scope.breeds = breeds;
        console.log(breeds);
      });

    }]);
