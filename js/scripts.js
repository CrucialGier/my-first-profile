$(document).ready(function() {
  $(".btn:first-child").click(function(){
    $(".btn").toggle();
    $("body").addClass("night-mode");
    $(".btn:first-child").addClass("day-mode");
  });
  $(".btn:nth-child(2)").click(function(){
    $(".btn").toggle();
    $("body").removeClass("night-mode");
    $(".btn:nth-child(2)").removeClass("day-mode");
  });
});
