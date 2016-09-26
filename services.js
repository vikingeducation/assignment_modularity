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