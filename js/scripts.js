$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var meal = $("input:radio[name=meal]:checked").val();
    var show = $("input:radio[name=show]:checked").val();
    var marathon = parseInt($("#marathon").val());
    var buddy = parseInt($("#buddy").val());
    var motivation = $("input:radio[name=motivation]:checked").val();
    var free = $("input:radio[name=free]:checked").val();

  if (meal === "lobster-roll") {
    $("#ruby").show();
  }

  if (show === "office") {
    $("#python").show();
  }

  if (marathon === 1) {
    $("#js").show();
  }

  if (buddy === 1) {
    $("#r").show();
  }

  if (motivation === "money") {
    $("#go").show();
  }

  if (free === "sleep") {
    $("#ruby").show();
  }
  
    });
  });
