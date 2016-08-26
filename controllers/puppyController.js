puppyApp.controller('PuppyCtrl', 
	['$scope', 'breedService', 'puppyService',
	function($scope, breedService, puppyService) {

		// table Sorting
		$scope.sortType = "name";
		$scope.sortReverse = false;

		// breed list related
		$scope.breeds;

		breedService.getBreeds().then(function(data) {
			$scope.breeds = data;
		})

		// puppy list related
		$scope.puppies;

		puppyService.getAllPuppies().then(function(data) {
			$scope.puppies = data;
		})

		// crud puppies
		$scope.formData = puppyService.formData;

		$scope.createPuppy = function(form) {
			puppyService.createPuppy(form).then(function(data) {
				data.breed = breedService.findBreed(data.breed_id);
				$scope.puppies.push(data);

			});
		};

		$scope.deletePuppy = function(id) {
			puppyService.deletePuppy(id).then(function(data) {
				for (var i = 0; i < $scope.puppies.length; i++) {
					var puppy = $scope.puppies[i];
					if (puppy.id === data.id) {
						$scope.puppies.splice(i, 1);
						break;
					}
				}
			})
		}



	}])