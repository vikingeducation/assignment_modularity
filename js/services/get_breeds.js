// Simple GET request example:
$http({
  method: 'GET',
  url: 'https://ajax-puppies.herokuapp.com/puppies.json',
}).then(function successCallback(response) {
    console.log(response);
  }, function errorCallback(response) {
    console.log(response);
  });