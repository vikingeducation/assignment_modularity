puppiesApp.directive('puppyrow', function(){

  return {
    templateUrl: "/app/directives/puppyrow.html",
    restrict: "AE",
    scope: {
      puppy: '=',
      adoptPuppy: '&'
    }
  }
})
