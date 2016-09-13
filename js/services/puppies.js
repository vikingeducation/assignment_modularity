Puppies.factory('puppiesService', ['$http', function($http){

	var object = {};

	object.getPuppies = function(){
		return $http.get('https://ajax-puppies.herokuapp.com/puppies.json');
	};

	return object;
}]);