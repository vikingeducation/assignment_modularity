puppers.controller('puppersController', ['$scope', 'breeds',
  function($scope, breeds) {
    $scope.breeds = {};

    breeds.all().then(function(async) {
      $scope.breeds = async;
    });


  }]);
