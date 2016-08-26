puppyApp.directive("puppyList", function() {

	return {
		templateUrl: "directives/puppyList.html",
		restrict: 'A',
		scope: {
			puppy: "=",
			deletePuppy: "&"
		}
	}
})