Puppies.controller('PuppiesController', ['$scope', 'breedsService', 'puppiesService', function($scope, breedsService, puppiesService){

	$scope.breeds = [];
	$scope.newPuppy = {name: "", breed_id: ""};
	$scope.puppies = [];

	$scope.deletePuppy = function(puppyId){
		puppiesService.deletePuppy(puppyId).then(
			function(response){$scope.removePuppy(puppyId)},
			function(response){console.log(response)}
		);
	};

	$scope.removePuppy = function(puppyId){
		for(var i = $scope.puppies.length - 1; i >= 0; i--){
			if ($scope.puppies[i].id === puppyId){
				$scope.puppies.splice(i, 1);
			};
		};
	};

	$scope.getBreeds = function(){
		breedsService.getBreeds().then(function(response){
			$scope.breeds = response.data;
		}, function(response){
		});
	};

	$scope.getPuppies = function(){
		puppiesService.getPuppies()
		.then(function(response){
			$scope.puppies = response.data;
		}, function(response){
		});
	};

	$scope.postPuppy = function(){
		puppiesService.postPuppy(JSON.stringify($scope.newPuppy)).then(function(response){ console.log(response) }, function(response){ console.log(response) });
	};

	$scope.getBreeds();

}]);