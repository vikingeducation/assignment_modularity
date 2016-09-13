Puppies.controller('PuppiesController', ['$scope', 'getBreedsService', function($scope, getBreedsService){

	$scope.getBreeds = function(){

		getBreedsService.getBreeds();

	};

}]);