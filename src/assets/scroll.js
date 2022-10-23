// function scrollFunction() {
//   window.scrollLeft('10px')
// }

// window.onscroll = scrollFunction;
var pos = 0;

$(window).bind("mousewheel", function (event) {
  if (event.originalEvent.wheelDelta >= 0) {
    if (0 < pos) {
      pos -= 400;
      $("#yscroll").scrollLeft(pos);
      console.log("Scroll up");
    }
  } else {
    if ($(window).width() > pos) {
      pos += 400;
      $("#yscroll").scrollLeft(pos);
      console.log("Scroll down");
    }
  }
  
  if($('#yscroll').scrollLeft() >= 1030) {
    $('#header').show()
    $('#content').show()
  }
  else {
    $('#header').hide()
    $('#content').hide()
  }

  console.log($('#yscroll').scrollLeft())

});

