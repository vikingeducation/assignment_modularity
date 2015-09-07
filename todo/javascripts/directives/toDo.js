toDo.directive('toDo', function() {
  return {
    templateUrl: "javascripts/directives/toDo.html",
    restrict: "A",
    replace: true,
    scope: {
      item: "="
    }
  };
});
