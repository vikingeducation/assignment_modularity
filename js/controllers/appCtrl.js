app.controller('appCtrl', ['$scope', 'breedsService', 'puppiesService',
  function($scope, breedsService, puppiesService){
    
    $scope.sortType = 'name';
    $scope.sortReverse = false;
    $scope.toggleSort = function(field) {
      if (field == $scope.sortType) {
        $scope.sortReverse ? $scope.sortReverse = false : $scope.sortReverse = true;
        return;
      }
      $scope.sortType = field;
    }
    $scope.sortCaret = function(sortType, sortReverse) {
      if(sortType == $scope.sortType && sortReverse == $scope.sortReverse) {
        return true;
      }
    }
    
    breedsService.getBreeds().then(function success(response) {
		  $scope.breeds = response.data;
	  });
    
    puppiesService.getPuppies().then(function success(response) {
      $scope.puppies = response.data;
    });
    
    $scope.createPuppy = function(puppyParams) {
      puppiesService.createPuppy(puppyParams).then(function success(response) {
        response.data.breed = _.find($scope.breeds, function (b) { return b.id === response.data.breed_id })
        $scope.puppies.push(response.data);
        $scope.puppyParams = {};
      });
    }
    
    $scope.adopt = function(puppy) {
      puppiesService.adopt(puppy).then(function success(response) {
				var index = $scope.puppies.indexOf(puppy);
				$scope.puppies.splice(index, 1);
			});
    }
  }
]);