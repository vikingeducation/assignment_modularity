
puppies.directive("puppyForm",
  ["breedService",
    "puppyService",
    function(breedService, puppyService){

      var setup = function setup(scope){
        breedService.breeds().then(function(breeds){
          scope.breeds = breeds;
        })

        scope.createPuppy = function createPuppy(valid, puppyData){
          if(valid){
            puppyService.post(puppyData).then(function(){
              puppyData.name=null;
              puppyData.breedId=null;
            })
          }
        }

        scope.possibleBreeds = function possibleBreeds(breedFilter){
          scope.matches = [];
          var breeds = scope.breeds;
          for(var i = 0; i < breeds.length; i++){
            if(breeds[i].name.match(breedFilter)) scope.matches.push(breeds[i]);
          }
          console.log(scope.matches);
        }
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
