pup.directive('puppyRow', [function() {
  return {
    templateUrl: 'templates/puppy_row.html',
    restrict: 'A',
    scope: { 
      puppy: "=",
      // adoptPuppy: "&"
    }
  };
}]);