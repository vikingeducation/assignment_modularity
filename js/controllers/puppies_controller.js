Puppies.controller('PuppiesController', ['$scope', 'breedsService', 'puppiesService', function($scope, breedsService, puppiesService){

	$scope.breedFilter = "";
	$scope.breeds = [];
	$scope.newPuppy = {name: "", breed_id: ""};
	$scope.orderKey = "+name";
	$scope.puppies = [];

	$scope.deletePuppy = function(puppyId){
		puppiesService.deletePuppy(puppyId).then(
			function(response){_removePuppy(puppyId)},
			function(response){console.log(response)}
		);
	};

	$scope.getBreeds = function(){
		breedsService.getBreeds().then(function(response){
			$scope.breeds = response.data;
			console.log(response.data);
		}, function(response){});
	};

	$scope.getPuppies = function(){
		puppiesService.getPuppies()
		.then(function(response){
			$scope.puppies = response.data;
		}, function(response){});
	};

	// This isn't working right now but have contacted Viking Code School on proper instructions for sending post requests for new breeds.
	$scope.postBreed = function(){
		var newBreed = {name: $scope.breedFilter};

		breedsService.postBreed(JSON.stringify(newBreed)).then(
			function(response){console.log(response)
				_ajaxPostPuppy()},
			function(response){console.log(response)}
		);
	};

	$scope.postPuppy = function(){
		if (_returnBreedIdByName($scope.breedFilter)){
			$scope.newPuppy.breed_id = _returnBreedIdByName($scope.breedFilter);
			_ajaxPostPuppy();
		} else {
			$scope.postBreed();
		};
	};

	$scope.setOrderKey = function(key){
		if ($scope.orderKey.slice(1) === key ){
			if ($scope.orderKey[0] === "+") {
				$scope.orderKey = "-" + key;
			} else {
				$scope.orderKey = "+" + key;
			};
		} else {
			$scope.orderKey = "+" + key;
		};
	};

	$scope.selectBreedFilter = function(name){
		_updateBreedFilter(name);
		_hideBreedFilter();
	};

	$scope.showBreedFilter = function(){
		$("#breed-list").show();
	};

	var _ajaxPostPuppy = function(){
		puppiesService.postPuppy(JSON.stringify($scope.newPuppy)).then(function(response){
				$scope.newPuppy = {name: "", breed_id: ""};
				$scope.puppies.push({id: response.data.id, 
														 breed: {name: _returnBreedNameById(response.data.breed_id)}, 
														 name: response.data.name}) 
			}, function(response){});
	};

	var _hideBreedFilter = function(){
		$("#breed-list").toggle();
	};

	var _updateBreedFilter = function(name){
		$scope.breedFilter = name;
	};

	var	_returnBreedIdByName = function( name ){
		for (var i = 0; i < $scope.breeds.length; i++){
			if ($scope.breeds[i].name === name){
				return $scope.breeds[i].id;
			};
		};
	};

	var _returnBreedNameById = function(breedId){
		for (var i = 0; i < $scope.breeds.length; i++){
			if ($scope.breeds[i].id === breedId){
				return $scope.breeds[i].name;
			};
		};
	};

	var _removePuppy = function(puppyId){
		for(var i = $scope.puppies.length - 1; i >= 0; i--){
			if ($scope.puppies[i].id === puppyId){
				$scope.puppies.splice(i, 1);
			};
		};
	};

	$scope.getBreeds();

}]);