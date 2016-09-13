Puppies.factory('breedsService', ['$http', function($http){

	var object = {};

	object.getBreeds = function(){
		return $http.get('https://ajax-puppies.herokuapp.com/breeds.json');
	};

	return object;
}]);