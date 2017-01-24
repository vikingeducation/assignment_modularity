puppies.controller('PuppiesCtl', [
  '$scope', 'puppyService', 'breedService',
  function($scope, puppyService, breedService){
    puppyService.puppies().then(function(puppies){
      $scope.puppies = puppies
    })

    $scope.adopt = function adopt(puppy){
      puppyService.adopt(puppy)
    }
  }
])
