puppers.directive('pupper', function() {
  return {
    templateUrl: "javascripts/directives/pupper.html",
    restrict: "A",
    replace: true,
    scope: {
      pup: "=",
      adoptPup: "&"
    }
  };
});
