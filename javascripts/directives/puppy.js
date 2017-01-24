pupShelter.directive('puppy', function() {
  return {
    templateUrl: "/javascripts/directives/puppy.html",
    restrict: "E",
    scope: {
      puppy: '=',
      adoptPuppy: '&'
    }
  };
});
