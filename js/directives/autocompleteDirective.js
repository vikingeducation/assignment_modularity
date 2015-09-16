app.directive('autoComplete', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, elem) {
      // Invoke jQuery autocomplete to rebind the the list of suggestions every time.
      // Watch for the breedNames;
      scope.$watch(function() {
        console.log(scope);
        elem.autocomplete({
          source: scope.breedNames,
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
