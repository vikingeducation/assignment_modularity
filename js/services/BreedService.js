// ----------------------------------------
// BreedService
// ----------------------------------------


PuppyShelter.factory('BreedService',
  ['$http', '$httpParamSerializer',
  function($http, $httpParamSerializer) {

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

    BreedService.destroy = function(id) {
      return $http({
        url: BreedService.END_POINT.replace(/\.json/, '/' + id + '.json'),
        method: 'DELETE'
      });
    };

    return BreedService;

  }]);



