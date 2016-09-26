"use strict";

app.factory("breedsService", ["$http", function($http){

	var getBreeds = function() {
		var breeds
	 $http({
			method: 'GET',
			url: "https://ajax-puppies.herokuapp.com/breeds.json",
		}).success(function(response){
			breeds = response;
		});
		return breeds
	}

	return { breeds: getBreeds() };
}]);

app.factory("puppiesService",["$http", function($http){

	var getPuppies = function(){
		$http({
			method:"GET",
			url: "https://ajax-puppies.herokuapp.com/puppies.json"
		}).success(function(response){
			return response.data;
		});
	};

	var makePuppy = function(data){
		$http({
			method: "POST",
			url: "https://ajax-puppies.herokuapp.com/puppies.json",
			data: data,
			headers: {
				'Content-Type': 'application/json'
			}
		}).success(function(response){
			console.log("puppy successfully created");
		});
	};

	var adoptPuppy = function(data){
		$http({
			method: "DELETE",
			url: "https://ajax-puppies.herokuapp.com/puppies/"+data.puppy_id+".json",
			headers: {
				'Content-Type': 'application/json'
			}
		}).success(function(response){
			console.log("puppy succesfully adopted");
		});
	};

	return { getPuppies: getPuppies,
					makePuppy: makePuppy,
					adoptPuppy: adoptPuppy };
}]);