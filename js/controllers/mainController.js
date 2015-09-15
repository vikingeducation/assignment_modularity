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

}]);