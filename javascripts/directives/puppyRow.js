pupShelter.directive('puppyRow', function() {
  return {
    templateUrl: "/javascripts/directives/puppyRow.html",
    restrict: "A",
    scope: {
      puppy: '=',
      adoptPuppy: '&'
    }
  };
});
