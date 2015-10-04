puppyShelter.controller('ShelterCtrl',
  ['$scope', 'breeds', 'puppies',
  function($scope, breeds, puppies) {

    $scope.sort = "created_at";
    $scope.sortReverse = true;


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


    $scope.createPuppy = function(newPuppy) {
      // get breed_id
      // if (!newPuppy.breed_id) { make breed }
      puppies.create(newPuppy).then(function(response) {
        $scope.renderSinglePuppy(response.data)
        $scope.newPuppy = null;
      }, function(response) {
        console.log('creation error');
      });
    }


    $scope.renderSinglePuppy = function(puppy) {
      puppy.breed = { name: $scope.breedName(puppy.breed_id) };
      $scope.puppies.push(puppy);
    }

    $scope.breedName = function(breed_id) {
      return $scope.breeds.filter(function(breed) {
        return (breed.id === breed_id)
      })[0].name;
    };


    $scope.destroy = function(puppy) {
      puppies.destroy(puppy.id).then(function(response) {
        var index = $scope.puppies.indexOf(puppy);
        $scope.puppies.splice(index, 1);
      }, function(response) {
        console.log('delete error')
      });
    };


    $scope.toggleSort = function(option) {
      if (option === $scope.sort) {
        $scope.sortReverse ^= true;
      } else {
        $scope.sort = option;
        $scope.sortReverse = false;
      };
    };


    $scope.fillAutocomplete = function(breed) {
      $scope.newPuppy.breedName = breed.name;
      $scope.newPuppy.breed_id = breed.id
    }


  }]);