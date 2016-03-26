puppyAPI.directive('puppy', function() {
  return {
    templateUrl: "../directives/puppy.html",
    restrict: "E",
    scope: {
      puppy: "=",
      killPuppy: "&"
    }
  };
}
);
