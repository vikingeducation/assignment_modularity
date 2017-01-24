puppies.directive('puppy', function(){
  var setup = function setup(s, e, a){
    s.breed = s.puppy.breed;
  }
  return {
    templateUrl: '/js/directives/puppy.html',
    restrict: 'A',
    scope:{
      puppy: "=",
      adopt: '&'
    },
    link: setup
  }
})
