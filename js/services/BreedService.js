// ----------------------------------------
// BreedService
// ----------------------------------------


PuppyShelter.factory('BreedService',
  ['$http', function($http) {

    var BreedService = {};

    // BreedService.END_POINT = 'http://pacific-stream-9205.herokuapp.com/breeds.json';
    BreedService.END_POINT = 'http://localhost:4000/breeds.json';

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



