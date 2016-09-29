PuppyApp.controller('PuppyCtrl', ['$scope', 'BreedService', 'PuppyService', function ($scope, BreedService, PuppyService) {
	BreedService.getBreeds().then(function success(response) {
		$scope.breeds = response.data;
	});

	$scope.createPuppy = function () {
		PuppyService.createPuppy($scope.puppyParams).then(
			function success(response) {
				console.log(response.data);
				for (var i = 0; i < $scope.breeds.length; i++) {
					if ($scope.breeds[i].id === response.data.breed_id) {
						response.data.breed = $scope.breeds[i];
						break;
					};
				};
				$scope.puppies.push(response.data);
				$scope.puppyParams = {};
			}
		);
	};

	PuppyService.getPuppies().then(function success(response) {
		console.log(response.data);
		$scope.puppies = response.data;
	})

	$scope.adopt = function (puppy) {
		PuppyService.adopt(puppy).then(
			function success(response) {
				var index = $scope.puppies.indexOf(puppy);
				$scope.puppies.splice(index, 1);
			}
		);
	};

	$scope.setSort = function (value) {
		$scope.sort = {
			"name": "-name",
			"-name": "name",
			"breed.name": "-breed.name",
			"-breed.name": "breed.name"
		}[$scope.sort] || value;
	};

}]);
