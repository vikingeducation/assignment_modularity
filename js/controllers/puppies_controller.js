Puppies.controller('PuppiesController', ['$scope', 'getBreedsService', function($scope, getBreedsService){

	$scope.breeds = [];

	// When called, it'll set $scope.breeds to the returned breeds array.
	$scope.getBreeds = function(){
		getBreedsService.getBreeds().then(function(response){
			$scope.breeds = response.data;
		}, function(response){
		});
	};

	$scope.getBreeds();

}]);