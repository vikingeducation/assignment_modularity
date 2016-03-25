puppyAPI.directive('autocomplete', function() {

  function linkCallBack(scope, element, attributes) {

  }

  return {
    templateUrl: "../directives/autocomplete.html",
    restrict: "E",
    scope: {
      model: "@"
    },
    link: linkCallBack
  };
}
);
