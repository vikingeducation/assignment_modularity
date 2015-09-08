puppers.controller('puppersController', ['$scope', 'breeds', 'puppies',
  function($scope, breeds, puppies) {
    $scope.sortType = 'name';
    $scope.sortReverse = false;

    $scope.breeds = [];
    $scope.puppies = [];

    breeds.all().then(function(async) {
      $scope.breeds = async;
    });

    puppies.all().then(function(async) {
      $scope.puppies = async;
    });

    $scope.adoptPup = function(pupID) {
      $scope.puppies.splice(pupID, 1);
    };

  }]);
