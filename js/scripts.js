$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var meal = $("input:radio[name=meal]:checked").val();
    var show = $("input:radio[name=show]:checked").val();

  if (meal === "lobster-roll") {
    $("#ruby").show();
  }

  if (show === "office") {
    $("#python").show();
  }



    });
  });
