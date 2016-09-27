//puppy

app.directive('puppyDirective', [function(){

  return {
    templateUrl: 'puppy.html',
    restrict: 'E',
    scope: {
      puppy: '=',
      adoptPuppy: '&'
    }
  };
}]);
