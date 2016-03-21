// ----------------------------------------
// PuppyService
// ----------------------------------------


PuppyShelter.factory('PuppyService',
  ['$http', function($http) {

    var PuppyService = {};

    PuppyService.END_POINT = 'https://ajax-puppies.herokuapp.com/puppies.json';

    PuppyService.all = function() {
      return $http({
        url: PuppyService.END_POINT,
        method: 'GET'
      });
    };

    PuppyService.create = function(data) {
      return $http({
        url: PuppyService.END_POINT,
        method: 'POST',
        data: data
      });
    };

    PuppyService.destroy = function(id) {
      return $http({
        url: PuppyService.END_POINT.replace(/\.json/, '/' + id + '.json'),
        method: 'DELETE'
      });
    };

    return PuppyService;

  }]);




