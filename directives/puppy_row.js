pup.directive('puppyRow', ['puppiesService', function(puppiesService) {
  return {
    templateUrl: 'templates/puppy_row.html',
    restrict: 'A',
    // scope: true
    scope: { 
      puppy: "=",
      // adoptPuppy: "&"
    },

    link: function(scope) {
      scope.adoptPuppy = function() {
        puppiesService.deletePuppy(scope.puppy.id);
      }
    }
  };
}]);