
puppies.directive("puppyForm",
  ["breedService",
    "puppyService",
    function(breedService, puppyService){

      var setup = function setup(scope){
        breedService.breeds().then(function(breeds){
          scope.breeds = breeds;
        })
        scope.
      };

      return {
        templateUrl: "js/directives/puppyForm.html",
        restrict: "E",
        scope: {
          createPuppy: "&"
        },
        link: setup
      };

    }
]);
