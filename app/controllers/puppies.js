puppiesApp.controller('PuppiesCtrl', [
    '$scope',
    'puppies',
    'breeds',
    '_',
    function($scope, puppies, breeds, _) {

      $scope.puppies = [];

        $scope.refreshPuppies = function() {
          puppies.getPuppies.then(function(result) {
              $scope.puppies.splice(0,$scope.puppies.length)
              for (var i = 0; i < result.data.length; i++) {
                $scope.puppies.push(result.data[i]);
              }
          });
        }

        breeds.getBreeds.then(function(result) {
            $scope.breeds = result.data;
        });

        $scope.addPuppy = function() {
            var name = $scope.newPuppy.name;
            var breed_id = $scope.newPuppy.breed_id;
            puppies.addPuppy(name, breed_id).then(function(object){
              var breed = _.find($scope.breeds, {"id": object.data.breed_id})
              object.data.breed = {};
              object.data.breed.name = breed.name;
              $scope.puppies.push(object.data);
            });
            $scope.newPuppy.name = "";
            $scope.newPuppy.breed_id = null;
        };

        $scope.adoptPuppy = function(puppy_id) {
            puppies.deletePuppy(puppy_id).then(function() {
                var puppy = _.find($scope.puppies, {"id": puppy_id});
                _.remove($scope.puppies, puppy);
            });
        };

        $scope.refreshPuppies();
    }
]);
