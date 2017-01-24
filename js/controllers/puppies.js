puppies.controller('PuppiesCtl', [
  '$scope', 'puppyService', 'breedService',
  function($scope, puppyService, breedService){
    puppyService.puppies().then(function(puppies){
      $scope.puppies = puppies
    })
  }
])
