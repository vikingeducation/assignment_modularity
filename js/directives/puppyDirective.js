// ----------------------------------------
// puppyDirective
// ----------------------------------------


PuppyShelter.directive('puppy', function() {
  return {
    templateUrl: '/js/templates/puppy.html',
    restrict: 'A',
    scope: {
      puppy: '=',
      destroy: '&'
    }
  };
});



