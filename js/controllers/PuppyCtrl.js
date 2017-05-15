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
    var newPuppy = {
      name: formData.name,
      breed_id: formData.breedObj.id
      // breedName: formData.breedObj.name
    };


    puppiesService.createPuppy(newPuppy).then(function(response) {
      console.log("puppy created!")
        console.log(response)
      //
      }, function errorCallback(response) {
        console.log("puppy not created!")
        console.log(response)
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
      console.log( $scope.breeds )
      window.yy = response.data;
      }, function errorCallback(response) {
        //
      });
  };

  //init
  $scope.getAllPuppies();
  $scope.getBreeds();
}]);
