puppyShelter.controller('ShelterCtrl',
  ['$scope', 'breeds', 'puppies',
  function($scope, breeds, puppies) {

    $scope.getBreeds = function() {breeds.getAll()};
    $scope.breeds = $scope.getBreeds();

  }]);