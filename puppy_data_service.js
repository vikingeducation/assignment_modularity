
puppies.factory( 'puppyDataService', [ '$http', function($http) {
  var obj = {};

  var _breeds = [];
  var _currentPuppies = [];


  obj.apiPuppies = function() {
      $http({
      method: 'GET',
      url: 'https://pacific-stream-9205.herokuapp.com/puppies.json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log('im here - puppies');
        console.log(response.data);

        var puppiesArr = response.data;
        puppiesArr.forEach( function(puppyObj){
          var tempPuppyObj = {
            name: puppyObj['name'],
            breed: puppyObj['breed']['name']
          }
          _currentPuppies.push( tempPuppyObj );
        });

        console.log( _currentPuppies );
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });
  }

  return obj;
}]);