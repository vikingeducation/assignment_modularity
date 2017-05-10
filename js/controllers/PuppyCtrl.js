app.controller('PuppyCtrl', ['$scope', 'puppiesService', 'breedsService',
function($scope, puppiesService, breedsService){

  $scope.getAllPuppies = function(){
    puppiesService.getPuppies().then(function successCallback(response) {
      $scope.allPuppies = response.data;
      }, function errorCallback(response) {
        $scope.allPuppies = ['Unable to retreive list.'];
      });
  };

  $scope.adoptPuppy = function(puppyId){
    puppiesService.adoptPuppy(puppyId).then(function(response) {
      console.log('puppy deleted', puppyId)
      // 
      window.xx = response;
      }, function errorCallback(response) {
        //
      });
  };
  //init
  $scope.getAllPuppies()
}]);
