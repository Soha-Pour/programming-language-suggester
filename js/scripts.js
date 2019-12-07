$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var meal = $("input:radio[name=meal]:checked").val();
    var show = $("input:radio[name=show]:checked").val();
    var marathon = parseInt($("#marathon").val());
    var buddy = parseInt($("#buddy").val());
    var motivation = $("input:radio[name=motivation]:checked").val();
    var free = $("input:radio[name=free]:checked").val();

    if (meal === "burger" && show === "office" && marathon === 1 && buddy === 1 && motivation === "peace" && free === "sleep") {
      $("#ruby").show();
    }
    });
  });
