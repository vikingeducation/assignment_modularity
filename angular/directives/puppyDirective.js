ajaxPuppies.directive('puppy', ["puppiesService", function(puppiesService) {
  return {
    restrict: "E",
    templateUrl: "angular/directives/puppyTemplate.html",
    scope: {
      puppy: "="
    },
    link: function(scope) {
      scope.deletePuppy = puppiesService.deletePuppy;
    }

  }
}]);
