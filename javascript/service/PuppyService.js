PuppyApp.factory('PuppyService', ['$http', function ($http) {
	var stub = {};

	stub.getPuppies = function () {
		return $http({
			method: "get",
			url: "https://ajax-puppies.herokuapp.com/puppies.json"
		});
	};

	stub.createPuppy = function (params) {
		return $http({
			method: "post",
			url: "https://ajax-puppies.herokuapp.com/puppies.json",
			data: {
				name: params.name,
				breed_id: params.breed_id
			},
		});
	};

	stub.adopt = function (puppy) {
		return $http({
			method: "delete",
			url: "https://ajax-puppies.herokuapp.com/puppies/" + puppy.id + ".json"
		});
	};

	return stub;
}]);
