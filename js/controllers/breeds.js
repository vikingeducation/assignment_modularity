puppies.controller('BreedsCtl', [
  '$scope', 'puppyService', 'breedService',
  function($scope, puppyService, breedService){
    breedService.breeds().then(function(breeds){
      $scope.breeds = breeds
    })
  }
])
