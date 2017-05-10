app.factory('puppiesService', ['$http', function($http){
  var getPuppies = function(){
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/puppies.json'
    })
  };
  
  return {
    getPuppies: getPuppies
  };
}]);
