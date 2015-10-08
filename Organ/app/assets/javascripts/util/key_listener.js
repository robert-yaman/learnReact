$(function() {

$("body").keydown(function(event){
  console.log("keydown");
  if (event.which == 65) {
    keyActions.startNote("a");
  }
});

$("body").keyup(function (event){
  console.log("keyup");
  if (event.which == 65) {
    keyActions.stopNote("a");
  }
});

});
