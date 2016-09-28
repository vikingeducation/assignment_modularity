app.directive("puppyRow", [function(){
  return {
    templateUrl: "/directives/puppyRow.html",
    restrict: "A",
    scope: {
      puppy: "=",
      adoptPuppy: "&"
    }
  }

}])