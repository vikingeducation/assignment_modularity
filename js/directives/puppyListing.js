app.directive('puppyListing', function(){
  return {
    templateUrl: 'js/directives/puppyListing.html',
    restrict: 'AE',
    scope: {
      puppy: "=",
      action: "&"
    }
  };
});