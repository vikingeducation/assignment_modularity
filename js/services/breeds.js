app.service('breeds', 
	['$http', '$window' , function( $http, $window ){

	var getBreeds = function(){
		return $http({
			method: 'GET',
			url: 'https://pacific-stream-9205.herokuapp.com/breeds.json'
		})
	}

	return {
		getBreeds: getBreeds
	}

	}
]);