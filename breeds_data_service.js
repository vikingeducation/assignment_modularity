
puppies.factory( 'breedsDataService',  [ '$http', function($http) {
  var obj = {};

  var _breeds = [];


  obj.apiBreeds = function() {
      $http({
      method: 'GET',
      url: 'https://pacific-stream-9205.herokuapp.com/breeds.json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log('im here - breeds');

        var breedsArr = response.data;
        breedsArr.forEach( function(breedObj){
          var tempBreedObj = {
            breed: breedObj['name']
          }
          _breeds.push( tempBreedObj );
        });

        console.log( _breeds );

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });
  }

  return obj;
}]);