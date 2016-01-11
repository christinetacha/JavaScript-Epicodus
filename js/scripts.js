$(document).ready(function() {
  $(".clickable").click(function() {
    $("#image-shown").fadeToggle();
    $("#image-hidden").fadeToggle();
  });
});
