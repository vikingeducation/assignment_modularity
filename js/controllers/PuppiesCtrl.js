// ----------------------------------------
// PuppiesCtrl
// ----------------------------------------

PuppyShelter.controller('PuppiesCtrl',
  ['$scope', 'PuppyService', 'BreedService',
  function($scope, PuppyService, BreedService) {

    // Scope
    // ----------------------------------------

    $scope.data = {
      puppy: {},
      breed: {}
    };

    $scope.breeds = [];
    $scope.puppies = [];

    $scope.flash = {};
    $scope.clearFlash = function(key) {
      delete $scope.flash[key];
    };

    $scope.sort = {
      puppies: 'name',
      breeds: 'name'
    };

    // Helpers
    // ----------------------------------------

    var _destroy = function(name, id) {
      var item = _.find($scope[name], function(item) {
        return item.id === id;
      });
      var index = $scope[name].indexOf(item);
      if (index >= 0) {
        $scope[name].splice(index, 1);
      }
    };

    // Sorting
    // ----------------------------------------

    $scope.setSort = function(key, value) {
      var sortings = {
        puppies: {
          "name": "-name",
          "breed": "-breed",
          "-name": "name",
          "-breed": "breed",
        },
        breeds: {
          "name": "-name"
        }
      };

      if (value === $scope.sort[key]) {
        $scope.sort[key] = sortings[key][value];
      } else {
        $scope.sort[key] = value;
      }
    };

    // Puppies
    // ----------------------------------------

    PuppyService.all()
      .then(function(response) {
        $scope.puppies = response.data;
        console.log(response);
      }, function(response) {
        $scope.flash.danger = 'Error: could not load puppies';
        console.error(response);
      });

    $scope.createPuppy = function() {
      PuppyService.create($scope.data.puppy)
        .then(function(response) {
          $scope.puppies.push(response.data);
          $scope.flash.success = 'Puppy created';
          console.log(response);
        }, function(response) {
          $scope.flash.danger = 'Error: could not create puppy';
          console.error(response);
        });
    };

    $scope.destroyPuppy = function(id) {
      PuppyService.destroy(id)
        .then(function(response) {
          _destroy('puppies', id);
          $scope.flash.success = 'Puppy adopted';
          console.log(response);
        }, function(response) {
          $scope.flash.danger = 'Error: could not adopt puppy';
          console.error(response);
        });
    };

    // Breeds
    // ----------------------------------------

    BreedService.all()
      .then(function(response) {
        $scope.breeds = response.data;
        console.log(response);
      }, function(response) {
        $scope.flash.danger = 'Error: could not load breeds';
        console.error(response);
      });

    $scope.createBreed = function() {
      BreedService.create($scope.data.breed)
        .then(function(response) {
          $scope.breeds.push(response.data);
          $scope.flash.success = 'Breed created';
          console.log(response);
        }, function(response) {
          $scope.flash.danger = 'Error: could not create breed';
          console.error(response);
        });
    };

    $scope.destroyBreed = function(id) {
      BreedService.destroy(id)
        .then(function(response) {
          _destroy('breeds', id);
          $scope.flash.success = 'Breed destroyed';
          console.log(response);
        }, function(response) {
          $scope.flash.danger = 'Error: could not destroy breed';
          console.error(response);
        });
    };

  }]);
























