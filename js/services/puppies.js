Puppies.factory('puppiesService', ['$http', function($http){

	var object = {};

	object.getPuppies = function(){
		return $http.get('https://ajax-puppies.herokuapp.com/puppies.json');
	};

	object.postPuppy = function( newPuppy ){
		return $http.post('https://ajax-puppies.herokuapp.com/puppies.json', newPuppy);
	};

	return object;
}]);