// function scrollFunction() {
//   window.scrollLeft('10px')
// }

// window.onscroll = scrollFunction;
var pos = 0;

$(window).bind("mousewheel touchmove", function (event) {
  if (event.originalEvent.wheelDelta >= 0) {
    if (0 < pos) {
      pos -= $(window).width();
      $("#yscroll").scrollLeft(pos);
    }
  } else {
    if ($(window).width() > pos) {
      pos += $(window).width();
      $("#yscroll").scrollLeft(pos);
    }
  }

  if ($("#yscroll").scrollLeft() >= $(window).width() ) {
    $("#header").show();
    $("#content").show();
    $('body').css('overflow', 'visible')
  } else {
    $('body').css('overflow', 'hidden')
    $("#header").hide(500);
    $("#content").hide(500);
  }
});
