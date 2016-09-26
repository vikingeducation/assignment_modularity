puppiesApp.factory('puppyService', function() {

  var obj = {};

  _puppies = [{name: "Frank", breed: "Retriever", created: new Date()}]

  obj.listPuppies = function() {
    return _puppies;
  }

  obj.createPuppy = function(puppy) {
    _puppies.push(puppy);
  }

  obj.removePuppy = function(puppy) {
    var index = _puppies.indexOf(puppy);
    _puppies.splice(index, 1);
  }

  return obj;

})
