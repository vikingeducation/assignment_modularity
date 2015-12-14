app.controller('PuppyCtrl', 
	['$scope',
		'$http',
		'$window',
		'puppies',
		'breeds',
	function($scope, $http, $window, puppies, breeds){
		$scope.puppyName = null;
		$scope.puppyBreedId = null;
		$scope.puppies;
		
		// Get our list of breeds from our breeds.js service
		breeds.getBreeds().then(function(response) {
				$window.console.log("Breeds Found");
				$scope.breeds = response.data;
			}, function(response) {
				$window.console.log(response);
		});

		// QUESTION: Can I just return the information that I need here
		// directly in my servie or do I have to set the .then's here
		// in the controller?
		$scope.adoptPuppy = function(id){
			puppies.adoptPuppy(id).then(function(response) {
				$window.console.log("Puppy removed");
				refreshPuppiesList();
			}, function(response) {
				$window.console.log(response);
			});
		};

		// QUESTION: Same as above.
		$scope.addPuppy = function(){
			puppies.addPuppy($scope.puppyName, $scope.puppyBreedId).then(function(response) {
					$window.console.log("Puppy added!");
					refreshPuppiesList();
				}, function(response) {
					$window.console.log(response);
			});
			// Reset our inputs
			$scope.puppyName = null;
			$scope.puppyBreedId = null;
		};

		refreshPuppiesList = function(){
			puppies.getPuppies().then(function( response ){
				$window.console.log("Refreshed Puppies");
				$scope.puppies = response.data;
			}, function( response ){
				$window.console.log( response );
			})
		};

		// QUESTION: Weird, I couldn't call this up above, saying refreshPuppiesList
		// wasn't defined.
		refreshPuppiesList();

	}]);