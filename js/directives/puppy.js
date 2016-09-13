Puppies.directive('puppy', function(){
	return {
		templateUrl: '/js/directives/puppy.html',
		restrict: 'E',
		scope: {puppies: "=", 
						deletePuppy: "&"}
	};
});