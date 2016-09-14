Puppies.factory('puppiesService', ['$http', function($http){

	var object = {};

	object.deletePuppy = function(id){
		return $http.delete("https://ajax-puppies.herokuapp.com/puppies/" + id +".json");
	};

	object.getPuppies = function(){
		return $http.get('https://ajax-puppies.herokuapp.com/puppies.json');
	};

	object.postPuppy = function( newPuppy ){
		return $http.post('https://ajax-puppies.herokuapp.com/puppies.json', newPuppy);
	};

	return object;
}]);