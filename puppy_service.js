app.factory('PuppyService', ['$http', '_', function($http, _) {
  var BASE_URI = 'https://ajax-puppies.herokuapp.com/';
  var PUPPIES = 'puppies.json';

  var _buildURL = function(resource) {
    return [BASE_URI,resource].join('');
  };

  var PuppyService = {};

  PuppyService.puppies = [];

  PuppyService.all = function() {
    $http({
      method: 'GET',
      url: _buildURL(PUPPIES)
    }).then(function(response) {
      console.log(response.data);
      PuppyService.puppies = response.data;
    }).catch(function(reason) {
      console.log(['ERROR: ', reason].join(''));
    });
  };

  // PuppyService.create = function() {
  //   $http({
  //     method: 'POST',
  //     url: _buildURL(PUPPIES),
  //     dataType:
  //   }).then(function(response) {
  //     console.log(response.data);
  //     PuppyService.puppies = response.data;
  //   }).catch(function(reason) {
  //     console.log(['ERROR: ', reason].join(''));
  //   });
  // };


  return PuppyService;
}]);
