PuppyApp.factory('BreedService', ['$http', function ($http) {
	var stub = {};

	stub.getBreeds = function () {
		return $http({
			method: "get",
			url: "https://ajax-puppies.herokuapp.com/breeds.json",
		});
	};



	return stub;
}])
