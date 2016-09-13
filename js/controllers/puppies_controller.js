Puppies.controller('PuppiesController', ['$scope', 'breedsService', 'puppiesService', function($scope, breedsService, puppiesService){

	$scope.breeds = [];
	$scope.puppies = [];

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

	$scope.getBreeds();

}]);