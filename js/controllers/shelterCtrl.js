puppyShelter.controller('ShelterCtrl',
  ['$scope', 'breeds', 'puppies',
  function($scope, breeds, puppies) {


    // Assign $scope.breeds
    breeds.index().then(function(response) {
      $scope.breeds = response.data
    }, function(response) {
      console.log('error!');
    });


    // Assign $scope.puppies
    puppies.index().then(function(response) {
      $scope.puppies = response.data
    }, function(response) {
      console.log('error!');
    });

  }]);