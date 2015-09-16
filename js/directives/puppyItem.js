puppiesAPI.directive('puppyItem', function() {
  return {
    templateUrl: "js/directives/puppy_item.html",
    restrict: "E",
    scope: {
      puppy: "=",
      adoptPuppy: "&"
    }
  }
})