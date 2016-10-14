pupApp.directive("puppy", function(){
  return {
    restrict: "E",
    templateUrl: "directives/puppy.html",
    scope: {
      puppy: "=",
    },
  };
});
