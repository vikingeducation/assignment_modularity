puppyShelter.controller('ShelterCtrl',
  ['$scope', 'breeds', 'puppies',
  function($scope, breeds, puppies) {

    breeds.pullData().then(function(response) {
      $scope.breeds = response.data
    }, function(response) {
      console.log('error!');
    };

  }]);