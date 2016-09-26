"use strict";

app.factory("breedsService", ["$http", function($http){
	var _breedList = [];

	var getBreeds = function() {
	 return $http({
			method: 'GET',
			url: "https://ajax-puppies.herokuapp.com/breeds.json",
		}).success(function(response){
			for(var i = 0; i < response.length; i++){
				_breedList.push(response[i]);
			}
		});
	};

	var breedList = function(){
		return _breedList;
	};

	return { getBreeds: getBreeds,
			 breedList: breedList };
}]);

app.factory("puppiesService",["$http", function($http){
	var _puppyList = [];

	var getPuppies = function(){
		$http({
			method:"GET",
			url: "https://ajax-puppies.herokuapp.com/puppies.json"
		}).success(function(response){
			for(var i = 0; i < response.length; i++){
				_puppyList.push(response[i]);
			}
		});
	};

	var puppyList = function() {
		return _puppyList
	};

	var createPuppy = function(data){
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

	var adoptPuppy = function(puppyID){
		$http({
			method: "DELETE",
			url: "https://ajax-puppies.herokuapp.com/puppies/"+ puppyID +".json",
			headers: {
				'Content-Type': 'application/json'
			}
		}).success(function(response){
			console.log("puppy succesfully adopted");
		});
	};

	return { puppyList: puppyList,
					getPuppies: getPuppies,
					createPuppy: createPuppy,
					adoptPuppy: adoptPuppy };
}]);