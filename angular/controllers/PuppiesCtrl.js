ajaxPuppies.controller("PuppiesCtrl", ["$scope", "puppiesService", "breedsService", function($scope, puppiesService, breedsService) {

  breedsService.getBreeds().then(function(response) {
          $scope.breeds = response.data
        });

}])