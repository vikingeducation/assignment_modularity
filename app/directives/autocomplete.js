puppyAPI.directive('autocomplete', function() {

  function linkCallBack(scope, element, attributes) {
    scope.query = '';

    scope.removeSelection =  function() {
      scope.selectedIndex = -1;
      scope.suggestion = '';
      scope.selecting = false;
    };

    scope.selectedIndex = -1;

    scope.startSelecting = function () {
      scope.selecting = true;
    };

    scope.keyHit = function (e) {

      if (scope.selectedIndex < 0) {
        scope.selectedIndex = 0;
      }


      if (e.keyCode === 40) {
        scope.selectedIndex += 1;
      } else if (e.keyCode === 38) {
        scope.selectedIndex -= 1;
      } else if (e.keyCode === 9 || e.keyCode === 9) {
        scope.query = scope.suggestion;
      }
      else {
        scope.selectedIndex = 0;
      }
      scope.suggestion = scope.filteredDogs[scope.selectedIndex].name;
    };

    scope.myFilter = function (word) {
      if (scope.query === '') return true;
      var reg = RegExp("^" + scope.query);
      return reg.test(word.name);
    };
  }

  return {
    templateUrl: "../directives/autocomplete.html",
    restrict: "E",
    scope: {
      model: "=",
      value: "="
    },
    link: linkCallBack
  };
}
);
