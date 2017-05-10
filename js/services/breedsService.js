app.factory('breedsService', ['$http', function($http){
  var getBreeds = function(){
    return $http({
      method: 'GET',
      url: 'https://ajax-puppies.herokuapp.com/breeds.json',
    })
  };
  return {
    getBreeds: getBreeds
  };
}]);
