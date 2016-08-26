puppyApp.factory('puppyService', 
	['$http', function($http) {

	var obj = {};

	obj.getAllPuppies = function() {
		var promise = $http.get("https://ajax-puppies.herokuapp.com/puppies.json")
					  .then(function(response) {
					  	return response.data;
					  })
		return promise;
	}

	obj.formData = {};

	obj.createPuppy = function(form) {
		var promise = $http.post("https://ajax-puppies.herokuapp.com/puppies.json",
								 {
								 	name: obj.formData.name,
								 	breed_id: obj.formData.breed_id
								 })
					  .then(function(response) {
					  	  return response.data;
					  })
		return promise;
	}

	obj.deletePuppy = function(id) {
		var promise = $http({
			method: 'DELETE',
			url: "https://ajax-puppies.herokuapp.com/puppies/" + id + ".json",

		}).then(function(response) {
			return response.data;
		})

		return promise;
	}


	return obj;
}])