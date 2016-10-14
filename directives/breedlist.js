pupApp.directive("breedList", function(){
  return {
    templateUrl: "directives/breedlist.html",
    restrict: "AE",
    scope: {
      breeds: '='
    }
  };
})
