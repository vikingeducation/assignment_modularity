app.service('puppies', 
	['$http', '$window' , function( $http, $window ){

	var getPuppies = function(){
		return $http({
			method: 'GET',
			url: 'https://pacific-stream-9205.herokuapp.com/puppies.json'
		});
	}

	var adoptPuppy = function(id){
		return $http({
			method: 'DELETE',
			url: 'https://pacific-stream-9205.herokuapp.com/puppies/'+ id +'.json'
		})
	}

	var addPuppy = function( puppyName, breedId ){
		return $http({
			method: 'POST',
			url: 'https://pacific-stream-9205.herokuapp.com/puppies.json',
			data: {
				name: puppyName,
				breed_id: breedId
			}
		})
	}

	return {
		getPuppies: getPuppies, 
		adoptPuppy: adoptPuppy, 
		addPuppy: addPuppy
	}

	}
]);