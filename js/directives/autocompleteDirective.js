app.directive('autoComplete', function() {
  return {
    restrict: 'A',
    link: function(scope, elem) {
      // Invoke jQuery autocomplete to rebind the the list of suggestions every time.
      // Watch for the breedNames;
      scope.$watch(function() {
        return scope.breedNames;
      }, function() {
        elem.autocomplete({
          source: scope.breedNames
        });
      });
    }
  };
});;
