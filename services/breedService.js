puppyApp.factory('breedService', 
	['$http', function($http) {

		var obj = {};

		var listBreed = [];


		obj.getBreeds = function() {
			var promise = $http.get("https://ajax-puppies.herokuapp.com/breeds.json")
						  .then(function(response) {
						  	listBreed = response.data;
						  	return response.data;
						  })
			return promise;
		}

		obj.findBreed = function(id) {
			var foundBreed;
			angular.forEach(listBreed, function(breed) {
				if (breed.id === id) {
					foundBreed = breed;
				}
			})
			return foundBreed;
		}



		return obj;
}])