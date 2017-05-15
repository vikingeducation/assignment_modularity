app.controller('PuppyCtrl', ['$scope', 'puppiesService', 'breedsService',
function($scope, puppiesService, breedsService){

  // GET puppies
  $scope.getAllPuppies = function(){
    puppiesService.getPuppies().then(function successCallback(response) {
      $scope.allPuppies = response.data;
      }, function errorCallback(response) {
        $scope.allPuppies = ['Unable to retreive list.'];
      });
  };
  
  //POST puppy
  $scope.createPuppy = function(formData, puppyForm){
    console.log(formData, 'formData')
    console.log(puppyForm, 'puppyForm')
    puppiesService.adoptPuppy(puppyId).then(function(response) {

      //
      }, function errorCallback(response) {
        //
      });
  };
  
  // DELETE puppies
  $scope.adoptPuppy = function(puppyId){
    puppiesService.adoptPuppy(puppyId).then(function(response) {
      console.log('puppy deleted', puppyId)
      //
      }, function errorCallback(response) {
        //
      });
  };

  //GET breeds
  $scope.getBreeds = function(){
    breedsService.getBreeds().then(function successCallback(response) {
      $scope.breeds = response.data;
      console.log('got breeds')
      window.yy = response.data;
      }, function errorCallback(response) {
        //
      });
  };
  //init
  $scope.getAllPuppies()
  $scope.getBreeds()
}]);
