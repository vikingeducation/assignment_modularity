
puppies.directive("puppyForm",
  ["breedService",
    "puppyService",
    function(breedService, puppyService){

      var createPuppy = function createPuppy(valid, puppyData){
        if(valid){
          puppyService.post(puppyData).then(function(){
            puppyData.name=null;
            puppyData.breedId=null;
          })
        }
      };

      var autocomplete = function autocomplete(breed, scope){
        scope.newPuppy.breedId = breed.id;
        scope.possibleBreeds = breed.name;
      };

      var setBreedInputValue = function setBreedInputValue(breedName){
      };

      var setup = function setup(scope){

        breedService.breeds().then(function(breeds){
          scope.breeds = breeds;
        });

        scope.createPuppy = createPuppy;
        scope.autocomplete = autocomplete;

        scope.possibleBreeds = function possibleBreeds(breedFilter){
          scope.matches = [];
          var breeds = scope.breeds;
          for(var i = 0; i < breeds.length; i++){
            if(breeds[i].name.match(breedFilter)) scope.matches.push(breeds[i]);
          }
        };

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
