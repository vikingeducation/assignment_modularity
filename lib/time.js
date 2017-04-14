
pupHub.filter('timeago', function() {
  return function( time, enabled ) {
    return jQuery.timeago(time);
  };
});
