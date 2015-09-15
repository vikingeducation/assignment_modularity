puppiesAPI.factory("puppies", ['$http', function($http){

  obj = {};


  obj.getPuppies = function(){
     return $http.get('https://pacific-stream-9205.herokuapp.com/puppies.json')
  }

  obj.addPuppy = function (data) {
    return $http.post('https://pacific-stream-9205.herokuapp.com/puppies.json', JSON.stringify(data))
  }


  return obj;

}])