
puppies.directive("puppyForm",
  ["breedService",
    "puppyService",
    '$q',
    function(breedService, puppyService, $q){

      var getBreedByName = function(filter, breeds){
        var breed;
        for(var i = 0; i < breeds.length; i++) {
          if(breeds[i].name.toLowerCase() === filter.toLowerCase()){
            breed = breeds[i];
            break;
          }
        }
        if(!breed){
          return breedService.newBreed(filter);
        } else {
          return $q(function(resolve, reject){
            resolve(breed.id);
          })
        }
      }
      var post = function post(scope, puppyData){
        puppyService.post(puppyData).then(function(){
          puppyData.name=null;
          puppyData.breedId=null;
          scope.breedFilter=null;
          scope.showMatches = false;
        })
      }

      var createPuppy = function createPuppy(scope, valid, puppyData){
        if(isNaN(puppyData.breedId)){
          getBreedByName(scope.breedFilter, scope.breeds)
          .then(function(breedId){
              puppyData.breedId = breedId
              post(scope, puppyData);
            });
        }else if(valid){
          post(scope, puppyData)
        }
      };

      var autocomplete = function autocomplete(scope, breed){
        scope.newPuppy.breedId = breed.id;
        scope.breedFilter = breed.name;
        scope.showMatches = false;
      };

      var setup = function setup(scope){
        scope.newPuppy = {};
        scope.showMatches = true;

        breedService.breeds().then(function(breeds){
          scope.breeds = breeds;
        });

        scope.createPuppy = function(valid, puppyData){
          createPuppy(scope, valid, puppyData);
        };

        scope.autocomplete = function(breed){
          autocomplete(scope, breed);
        };

        scope.possibleBreeds = function possibleBreeds(breedFilter){
          scope.matches = [];
          var breeds = scope.breeds;
          for(var i = 0; i < breeds.length; i++){
            if(breeds[i].name.match(breedFilter)) scope.matches.push(breeds[i]);
          }
          scope.showMatches = true;
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
