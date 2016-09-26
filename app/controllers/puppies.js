puppiesApp.controller('PuppiesCtrl', [
    '$scope',
    'puppies',
    'breeds',
    function($scope, puppies, breeds) {

        $scope.refreshPuppies = function() {
            puppies.getPuppies.then(function(result) {
                $scope.puppies = result.data;
            });
        }

        breeds.getBreeds.then(function(result) {
            $scope.breeds = result.data;
        });

        $scope.addPuppy = function() {
            var name = $scope.newPuppy.name;
            var breed_id = $scope.newPuppy.breed_id;
            puppies.addPuppy(name, breed_id).then(function(){
              debugger
              $scope.refreshPuppies();
            });
            $scope.newPuppy.name = "";
            $scope.newPuppy.breed_id = null;
        };

        $scope.adoptPuppy = function(puppy_id) {
            puppies.deletePuppy(puppy_id).then(function() {
                $scope.refreshPuppies;
            });
        };

        $scope.refreshPuppies();
    }
]);
