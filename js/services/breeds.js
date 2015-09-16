puppiesAPI.factory("breeds", ['$http', function($http){

  obj = {};


  obj.getBreeds = function(){
     return $http.get('https://pacific-stream-9205.herokuapp.com/breeds.json')
  }



  return obj;

}])