puppies.directive('puppyRow', function(){
  return {
    templateUrl: "directives/puppy_row.html",
    restrict: "A",
    // things our directive can use:
    scope: {
        puppy: "=",
        deletePuppy: "&"
    }
  };
})