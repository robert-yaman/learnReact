$(function() {

$("body").keydown(function(event){
  if (event.which == 65) {
    keyActions.startNote("a");
  } else if (event.which == 83) {
    keyActions.startNote("b");
  } else if (event.which == 68) {
    keyActions.startNote("c");
  } else if (event.which == 70) {
    keyActions.startNote("d");
  } else if (event.which == 74) {
    keyActions.startNote("e");
  } else if (event.which == 75) {
    keyActions.startNote("f");
  } else if (event.which == 76) {
    keyActions.startNote("g");
  } else if (event.which == 186) {
    keyActions.startNote("aHigh");
  } else if (event.which == 73) {
    keyActions.startNote("fSharp");
  } else if (event.which == 79) {
    keyActions.startNote("gSharp");
  } else if (event.which == 87) {
    keyActions.startNote("aSharp");
  } else if (event.which == 69) {
    keyActions.startNote("cSharp");
  } else if (event.which == 82) {
    keyActions.startNote("dSharp");
  }
});

$("body").keyup(function (event){
  if (event.which == 65) {
    keyActions.stopNote("a");
  } else if (event.which == 83) {
    keyActions.stopNote("b");
  } else if (event.which == 68) {
    keyActions.stopNote("c");
  } else if (event.which == 70) {
    keyActions.stopNote("d");
  } else if (event.which == 74) {
    keyActions.stopNote("e");
  } else if (event.which == 75) {
    keyActions.stopNote("f");
  } else if (event.which == 76) {
    keyActions.stopNote("g");
  } else if (event.which == 186) {
    keyActions.stopNote("aHigh");
  } else if (event.which == 73) {
    keyActions.stopNote("fSharp");
  } else if (event.which == 79) {
    keyActions.stopNote("gSharp");
  } else if (event.which == 87) {
    keyActions.stopNote("aSharp");
  } else if (event.which == 69) {
    keyActions.stopNote("cSharp");
  } else if (event.which == 82) {
    keyActions.stopNote("dSharp");
  }
});

});
