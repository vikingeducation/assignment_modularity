puppiesApp.controller('PuppiesCtrl', ['$scope', 'puppyService', function($scope, puppyService) {


  $scope.puppies = puppyService.listPuppies();
  console.log($scope.puppies);

  $scope.addPuppy = function() {
    var puppy = {
      name: $scope.newPuppy.name,
      breed: $scope.newPuppy.breed,
      created: new Date()
    }
    puppyService.createPuppy(puppy)
  }

  $scope.adoptPuppy = function(puppy) {
    puppyService.removePuppy(puppy);
  }


}]);
