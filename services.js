"use strict";

app.factory("breeds", ["$http", function($http){
	var breedList = {};
	$http({
		method: 'GET',
		url: "https://ajax-puppies.herokuapp.com/breeds.json",
	}).success(function(response){
		breedList.breeds = response.data;
	});
	return breedList;
}]);

app.factory("puppies",["$http", function($http){
	var puppyService = {};
	var getPuppies = function(){
		$http({
			method:"GET",
			url: "https://ajax-puppies.herokuapp.com/puppies.json"
		}).success(function(response){
			puppyService.puppies = response.data;
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

	return puppyService;
}]);