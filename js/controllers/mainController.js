app.controller('MainCtrl', ['$scope',
                            'breeds',
                            'puppies',
                            function($scope,
                                      breeds,
                                      puppies){


  $scope.nameSort = 0;
  $scope.breedSort = 0;
  $scope.dateSort = 0;

  $scope.label = function(prop){
    console.log(prop.toLowerCase()+'Sort');
    return [prop, prop+' DESC', prop+' ASC'][$scope[prop.toLowerCase()+'Sort'] % 3];
  };

  $scope.cycleName = function(){
    $scope.nameSort++;
  };

  $scope.cycleBreed = function(){
    $scope.breedSort++;
  };

  $scope.cycleDate = function(){
    $scope.dateSort++;
  };

  // default = no sort
  // 1st click = ascending
  // 2nd click = descending
  // 3rd click = no sort
  // 4th click = ascending
  // ....

  $scope.sortCriteria = function(){
    var nameArr = [null, "-name", "+name"];
    var breedArr = [null, "-breed.name", "+breed.name"];
    var dateArr = [null, "-created_at", "+created_at"];

    var nameCriteria = nameArr[$scope.nameSort % 3];
    var breedCriteria = breedArr[$scope.breedSort % 3];
    var dateCriteria = dateArr[$scope.dateSort % 3];

    var criteria = [];

    if (nameCriteria) criteria.push(nameCriteria);
    if (breedCriteria) criteria.push(breedCriteria);
    if (dateCriteria) criteria.push(dateCriteria);

    console.log(criteria);

    return (criteria);
  };


  //Breeds
  breeds.getAll().then(function(response){
    $scope.breeds = {};
    $scope.breedNames = [];
    response.data.forEach(function(breed){
      $scope.breedNames.push(breed.name)
      $scope.breeds[breed.name] = breed.id;
    });

    console.log($scope.breedNames, $scope.breeds);
  });

  //Puppies
  puppies.getAll().then(function(response){
    console.log(response);
    $scope.puppies = response.data;
  });

  $scope.registerPuppy = function(){
    var newBreed = $scope.breeds[$scope.puppyBreed];
    var newName = $scope.puppyName;

    puppies.registerPuppy(newBreed, newName).then(function(response){
      var newDog = response.data;
      newDog.breed = { name: $scope.puppyBreed };
      $scope.puppies.unshift(newDog);
    }, function(){
      console.log("Failure...");
    });
  };

  $scope.adoptPuppy = function(puppy){
    console.log("Clicked");
    puppies.adoptPuppy(puppy).then(function(response){
      var idx = $scope.puppies.indexOf(puppy);
      $scope.puppies.splice(idx, 1);
      // $('puppy').remove(); Doesn't work
    }, function(response){
      console.log("Failure!");
      console.log(response);
    });
  };

}])
