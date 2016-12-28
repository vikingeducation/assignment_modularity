app.factory('puppiesService', ['$http', function($http){
  var obj = {};
  
  obj.getPuppies = function() {
    return $http({
             method: 'GET',
             url: 'https://ajax-puppies.herokuapp.com/puppies.json'
           })
  }
  
  obj.createPuppy = function (params) {
		return $http({
			method: "post",
			url: "https://ajax-puppies.herokuapp.com/puppies.json",
			data: {
				name: params.name,
				breed_id: params.breed_id
			}
		});
	};

	obj.adopt = function (puppy) {
		return $http({
			method: "delete",
			url: "https://ajax-puppies.herokuapp.com/puppies/" + puppy.id + ".json"
		});
	};

  return obj;
}]);