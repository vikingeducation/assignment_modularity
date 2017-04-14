console.log("puppyDirective loaded");
pupHub.directive('pup', function() {
  return {
    templateUrl: "/javascripts/directives/puppy.html",
    restrict: "EA",
    scope: {
      puppy: '=',
      adoptPuppy: '&'
    }
  };
});
