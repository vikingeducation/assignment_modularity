app.directive("breedOption", [function(){
  return {
    templateUrl: "/directives/breedOption.html",
    restrict: "A",
    scope: {
      breed: "="
    }
  }

}])