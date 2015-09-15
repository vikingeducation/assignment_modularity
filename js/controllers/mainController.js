app.controller('MainCtrl', ['$scope',
                            'breeds',
                            'puppies',
                            function($scope,
                                      breeds,
                                      puppies){

  //Breeds
  breeds.getAll().then(function(response){
    $scope.breeds = response.data;
  });

  //Puppies
  puppies.getAll().then(function(response){
    console.log(response);
    $scope.puppies = response.data;
  });

  $scope.registerPuppy = function(){
    puppies.registerPuppy($scope.puppyBreed, $scope.puppyName).then(function(response){
      var newDog = response.data;
      newDog.breed = { name: $scope.breeds[newDog.breed_id - 1].name };
      $scope.puppies.push(newDog);
    }, function(){
      console.log("Failure...");
    })
  };
}]);
