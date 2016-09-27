pup.directive('puppyRow', [function() {
  return {
    templateUrl: 'templates/puppy_row.html',
    restrict: 'A',
    scope: true
    // scope: { 
    //   puppy: "=",
    //   adoptPuppy: "&"
    // }
  };
}]);