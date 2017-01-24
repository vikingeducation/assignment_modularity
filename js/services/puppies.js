puppies.factory('puppyService', ['$http', function($http){
  var puppies = [];

  var getPuppies = function getPuppies(){
    return $http.get('https://ajax-puppies.herokuapp.com/puppies.json')
                .then(function(resp){
                  angular.copy(resp.data, puppies);
                  return puppies
                })
  };

  return {
    puppies: getPuppies
  }
}])
