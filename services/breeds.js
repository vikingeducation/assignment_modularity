app.factory("breeds", function ($http) {
  var breeds = {};

  breeds.getData = function () {
    return $http.get("https://ajax-puppies.herokuapp.com/breeds.json")
  };

  return breeds;
});
