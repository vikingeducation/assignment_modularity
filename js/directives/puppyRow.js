puppy.directive('puppyRow', function(){
  return {
    templateUrl: 'js/directives/puppyRow.html',
    restrict: 'A',
    scope: {
      puppy: "=",
      adoptPuppy: "&",
      lookupBreed: "&"
    }
  };
});