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


    $scope.verifyBreed = function(breedName) {
      var breedMatches = $scope.breeds.filter( function(breed) {
        return (breed.name === breedName)
      })

      if (breedMatches.length === 0) {
        $scope.createBreed(breedName);
      } else {
        return [0].id;
      };
    }


    $scope.createBreed = function(breedName) {
      breeds.create(breedName).then( function(response) {
        // doesn't look like we can create breeds?
        console.log(response.data);
      }, function(response) {
        console.log('breed not created');
      });
    }


    $scope.createPuppy = function(newPuppy) {
      if (!newPuppy.breed_id) {
        newPuppy.breed_id = $scope.verifyBreed(newPuppy.breedName);
      }

      puppies.create(newPuppy).then(function(response) {
        $scope.renderSinglePuppy(response.data)
        $scope.newPuppy = {};
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


    $scope.fillAutocomplete = function() {
      var item = event.target;
      $scope.newPuppy.breedName = item.innerHTML;
      $scope.newPuppy.breed_id = item.getAttribute('data-breed-id');
      $scope.showBreeds = false;
    }


    $scope.activateBreeds = function() {
      $scope.showBreeds = true;
    };


  }]);