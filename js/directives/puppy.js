app.directive('puppy', function(){
	return {
		templateUrl: "js/directives/puppy.html",
		restrict: "A",
		// QUESTION: I know this isn't best practice but I didn't know
		// how else to allow my puppy.html directive to use a function
		// which I've defined in my controller. Is there a better way to 
		// go about doing this? 
		scope: true
	};
});