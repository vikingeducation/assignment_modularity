puppies.directive('myClick', function(){

  var scopify = function scopify(s, a){
    // grab everything in parentheses
    var arr = a.myClick.match(/\((.*?)\)/)[1].split(",")
    // loop through argument list
    for(var i = 0; i < arr.length; i++){
      // replace any leading whitespace and split on dot for nested objects
      var args = arr[i].replace(/^\s/g, '').split('.');
      // at least one argument is created
      arr[i] = s[args[0]];
      // travel down the chain until you get the value you're looking for
      for(var a = 1; a < args.length; a++){
        arr[i] = arr[i][args[a]];
      }
    }
    // reset args as new array
    return arr;
  }
  var setup = function setup(s, e, a){
    // get everything before the parens
    s.funct = a.myClick.match(/^[^(]*/)[0];

    // set listener.  for some reason el.click just says it's not a function so you've got to go old school
    e[0].addEventListener('click',function(){
      s.$parent[s.funct].apply(s.$parent, scopify(s.$parent, a));
    })
  }
  return {
    restrict: 'A',
    scope:true,
    link: setup
  }
})
