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
      BreedService.breeds.splice(0, BreedService.breeds.length);
      for(var i in response.data){
        BreedService.breeds.push(response.data[i]);
      }
      return Promise.resolve(BreedService.breeds);
    }).catch(function(reason) {
      console.log(['ERROR: ', reason].join(''));
    });
  };

  return BreedService;
}]);
