
puppies.directive("puppies", function(){

  return {
    templateUrl: "/js/directives/puppies.html",
    restrict: "E",
    scope:{
      puppies: "=",
      adopt: "&"
    },
    link: function(scope){
      scope.setSortCriteria = function setSortCriteria(property){
        if (scope.orderType === property){
          scope.direction = !scope.direction;
        } else {
          scope.direction = true;
          scope.orderType = property;
        }
      };
    }
  };

})
