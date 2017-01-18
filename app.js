var app = angular.module("App", []);


app.controller("AppCtrl", ["$scope", "$http", "puppies", "breeds", function ($scope, $http, puppies, breeds){

  $scope.formData = {};


  function getPuppies() {
    puppies.getData().then(function (response) { $scope.puppies = response.data; });
  }
  function getBreed () {
    breeds.getData().then(function (response) {  $scope.breeds  = response.data; });
  }

  $scope.create = function () {
    puppies.create($scope.formData).
          then( function (response) {
            console.log(response);
            getPuppies();
            $scope.formData = null;
          }, function (response) {
            console.log(response);
          });
  };

  $scope.delete = function (item){
      puppies.delete(item).then(function (response){
        console.log(response);
        getPuppies();
      });
  };

  
  getBreed();
  getPuppies();


}]);
