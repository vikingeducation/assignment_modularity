app.directive('puppyTr', function(){
  return {
    templateUrl: "js/directives/puppy_tr.html",
    restrict: "A",
    scope: {
      pup: "=",
      adopt: '&'
    }
  };
})