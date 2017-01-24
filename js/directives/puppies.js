puppies.directive('puppies', function(){
  return {
    templateUrl: '/js/directives/puppies.html',
    restrict: 'E',
    scope:{
      puppies: "=",
      adopt: '&'
    }
  }
})
