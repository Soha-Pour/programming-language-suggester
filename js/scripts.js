$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();

    var meal = $("input:radio[name=meal]:checked").val();
    var show = $("input:radio[name=show]:checked").val();
    var marathon = parseInt($("#marathon").val());
    var buddy = parseInt($("#buddy").val());
    var motivation = $("input:radio[name=motivation]:checked").val();
    var free = $("input:radio[name=free]:checked").val();
    var nameInput = $("input#name").val();
    $("#ruby, #python, #js, #go, #r").hide();

    if (meal === "burger" || "pad-thai" && show === "office" && marathon === 1 && buddy === 1 && motivation === "peace" && free === "sleep") {
      $("#r").show();
    } else if (meal === "pad-thai" || "lobster-roll" && show === "breaking-bad" && marathon === 1 && buddy === 2 && motivation === "money" && free === "closet") {
      $("#python").show();
    } else if (meal === "lobster-roll" || "sushi" && show === "bob-ross" && marathon === 1 && buddy === 2 && motivation === "power" && free === "friends") {
      $("#js").show();
    } else if (meal === "sushi" || "burrito" && show === "stranger-things" && marathon === 2 && buddy === 3 && motivation === "helping" && free === "read") {
      $("#go").show();
    } else if (meal === "burrito" && show === "office" && marathon === 2 && buddy === 4 && motivation === "money" && free === "closet") {
      $("#r").show();
    } else {
      $("#ruby").show();
    }

    $(".name").text(nameInput);

    });
  });
