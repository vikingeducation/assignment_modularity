app.controller('PuppyCtrl', ['$scope', 'puppiesService', 'breedsService',
function($scope, puppiesService, breedsService){

  $scope.getAllPuppies = function(){
    puppiesService.getPuppies().then(function successCallback(response) {
      $scope.allPuppies = response.data;
      }, function errorCallback(response) {
        $scope.allPuppies = ['Unable to retreive list.'];
      });
  };
  //init
  $scope.getAllPuppies()
}]);
