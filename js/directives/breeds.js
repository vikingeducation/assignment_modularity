puppyShelter.directive('breeds', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/breeds.html',
    scope: {
      allBreeds: '=',
      query: '=',
      fillAutocomplete: '&'
    }
  }
})