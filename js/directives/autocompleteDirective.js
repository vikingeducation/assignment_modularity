app.directive('autoComplete', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, elem) {
      // Invoke jQuery autocomplete to rebind the the list of suggestions every time.
      // Watch for the breedNames;
      scope.$watch(function() {
        // Between our last commit and now, there are 'null' breeds.
        elem.autocomplete({
          source: scope.breedNames.filter( function (el) { return el }),
          select: function(){
            $timeout(function(){
              elem.trigger('input');
            }, 0);
          }
        });
      });
    }
  };
});
