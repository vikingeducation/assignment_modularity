// ----------------------------------------
// BreedService
// ----------------------------------------


PuppyShelter.factory('BreedService',
  ['$http', function($http) {

    var BreedService = {};

    BreedService.END_POINT = 'https://ajax-puppies.herokuapp.com/breeds.json';

    BreedService.all = function() {
      return $http({
        url: BreedService.END_POINT,
        method: 'GET'
      });
    };

    BreedService.create = function(data) {
      return $http({
        url: BreedService.END_POINT,
        method: 'POST',
        data: data
      });
    };

    return BreedService;

  }]);



