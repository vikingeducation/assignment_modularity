puppyAPI.controller('puppiesCtrl',
    ['$scope', 'PuppyService',
    function($scope, PuppyService) {

      PuppyService.getPuppies().then(function(puppies) {
        $scope.puppies = puppies;
      });

    }]);
