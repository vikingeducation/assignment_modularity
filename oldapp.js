PUPPY = {
  refreshList: function(){
    $("#refresh").click(function(){
      var request = ($.get("https://ajax-puppies.herokuapp.com/puppies.json"));
      request.then(function() {
        VIEW.updateList(request.responseJSON);
        PUPPY.adoptPuppy()
        PUPPY.refreshList();
      });

    });
  },

  breedList: function() {
      var request = $.get("https://ajax-puppies.herokuapp.com/breeds.json")
      request.then(function() {
        VIEW.updateBreed(request.responseJSON);
      })
  },

  createPuppy: function() {
    $('#submit-button').click(function(event){
      event.preventDefault();
      var data = {
        name: $('#name').val(),
        breed_id: $('#breed').val()
      };
      var request = $.ajax({
        type: "POST",
        url: "https://ajax-puppies.herokuapp.com/puppies.json",
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(){console.log("puppy successfully created")},
        error: function(){alert("puppy not created")},
        dataType: "json",
      });
      request.then(function() {
        VIEW.addPuppy(request.responseJSON);
        PUPPY.createPuppy();
      });
    });
  },

  adoptPuppy: function() {
    $('.adopt').click(function(){
      var string = 'https://ajax-puppies.herokuapp.com/puppies/'
      var num = $(this).attr("value")
      string += num + ".json";
      var request = $.ajax({
        type: "DELETE",
        url: string,
        contentType: 'application/json',
        success: function(){
          VIEW.adoptPuppy(num);
          console.log("puppy successfully adopted")},
        error: function(){alert("puppy not adopted")},
        dataType: "json"
      });
      request.then(function() {
          PUPPY.adoptPuppy();
      })

    });

  },
};


VIEW = {
  updateList: function(data){
    $('li').remove();
    for (var i = 0; i < data.length; i++) {
      string = "<li><strong>" + data[i].name + "</strong> (" + data[i].breed.name + ") created at: " + data[i].created_at.toString() + "-- <a href='#' value='" + data[i].id.toString() + "' class='adopt'>adopt</a></li>";
      var item = $(string);
      item.appendTo('#puppy-list');
    };
  },

  addPuppy: function(puppy) {
    var breed = ($("option[value='" + puppy.breed_id.toString() + "']")).text();
    string = "<li><strong>" + puppy.name + "</strong> (" + breed + ") created at: " + puppy.created_at.toString() + "-- <a href='#' value='" + puppy.id.toString() + "' class='adopt'>adopt</a></li>";
    var item = $(string);
    item.prependTo('#puppy-list');
  },

  updateBreed: function(data) {
    for (var i = 0; i < data.length; i++) {
      string = "<option value='" + data[i].id + "'>" + data[i].name + "</option>";
      $(string).appendTo('#breed');
    };
  },

  adoptPuppy: function(num) {
    ($("a[value='" + num + "']").parent()).remove();

  },
}

$('document').ready(function() {
  $( document ).ajaxStart(function() {
    $("<div id='wait'>Waiting...</div>").prependTo($('body'));
    setTimeout(function() {
      $('#wait').text("Sorry this is taking so long...");
    },
    1000);
  });

  $( document ).ajaxComplete(function() {
    $("#wait").remove();
  });

  $(document).ajaxSuccess(function() {
    $("<div id='success'>Finished!</div>").prependTo($('body'));
    setTimeout(function(){
      $('#success').fadeOut(1000);
    }, 2000);
  });

  $( document ).ajaxError(function(a, b, c, d) {
    $("<div id='fail'>Failed. Errors were: " + b.responseText + "</div>").prependTo($('body'));
    setTimeout(function() {
      $('#fail').fadeOut(1000);
    }, 2000);
  });

  PUPPY.breedList();
  PUPPY.refreshList();
  PUPPY.createPuppy();
  PUPPY.adoptPuppy();


 });
