app.factory('PuppyService', ['$http', '_', function($http, _) {
  var BASE_URI = 'https://ajax-puppies.herokuapp.com/';
  var PUPPIES = 'puppies.json';

  var _buildURL = function(resource) {
    return [BASE_URI,resource].join('');
  };

  var PuppyService = {};

  PuppyService.puppies = [];

  PuppyService.all = function() {
    return $http({
      method: 'GET',
      url: _buildURL(PUPPIES)
    }).then(function(response) {
      angular.copy(response.data,PuppyService.puppies);
      // PuppyService.puppies.splice(0, PuppyService.puppies.length);
      // for(var i in response.data){
      //   PuppyService.puppies.push(response.data[i]);
      // }
      // console.log(response.data);
      return PuppyService.puppies;
    }).catch(function(reason) {
      console.log(['ERROR: ', reason].join(''));
    });
  };

  PuppyService.create = function(puppyData) {
    // console.log(puppyData);
    $http({
      method: 'POST',
      url: _buildURL(PUPPIES),
      data: JSON.stringify(puppyData),
      dataType: 'json',
      contentType: 'application/json'
    }).then(function(response) {
      PuppyService.all();
    }).catch(function(reason) {
      console.log(['ERROR: ', reason].join(''));
    });
  };

  PuppyService.destroy = function(puppyData) {
    // console.log(puppyData);
    $http({
      method: 'DELETE',
      url: _buildURL('puppies/' + puppyData.id + '.json'),
      dataType: 'json',
      contentType: 'application/json'
    }).then(function() {
      PuppyService.all();
    }).catch(function(reason) {
      console.log(['ERROR: ', reason].join(''));
    });
  };


  return PuppyService;
}]);
