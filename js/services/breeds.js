Puppies.factory('breedsService', ['$http', function($http){

	var object = {};

	object.getBreeds = function(){
		return $http.get('https://ajax-puppies.herokuapp.com/breeds.json');
	};

	// This isn't working right now but have contacted Viking Code School on proper instructions for sending post requests for new breeds.
	object.postBreed = function(newBreed){
		return $http.post('https://ajax-puppies.herokuapp.com/breeds.json', newBreed);
	};

	return object;
}]);