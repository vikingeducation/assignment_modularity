app.factory('BreedService', ['$http', '_', function($http, _) {
  var BASE_URI = 'https://ajax-puppies.herokuapp.com/';
  var BREEDS = 'breeds.json';

  var _buildURL = function(resource) {
    return [BASE_URI,resource].join('');
  };

  var BreedService = {};

  BreedService.breeds = [];

  BreedService.all = function() {
    $http({
      method: 'GET',
      url: _buildURL(BREEDS)
    }).then(function(response) {
      console.log(response.data);
      BreedService.breeds = response.data;
    }).catch(function(reason) {
      console.log(['ERROR: ', reason].join(''));
    });
  };

  return BreedService;
}]);
