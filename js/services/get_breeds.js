Puppies.factory('getBreedsService', ['$http', function($http){

	var object = {};

	object.getBreeds = function(){

		$http({
	  	method: 'GET',
	  	url: 'https://ajax-puppies.herokuapp.com/puppies.json',
		}).then(function successCallback(response) {
	    console.log(response);
	  }, function errorCallback(response) {
	    console.log(response);
	  });

	};

	return object;
}]);