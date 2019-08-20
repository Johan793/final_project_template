// Make it rain!

$('nav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body, html').animate({
    scrollTop: targetOffset
  }, 600);
});

var kkeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  kkeys.push(e.keyCode);
  if (kkeys.toString().indexOf(konami) >= 0) {
    $(document).unbind('keydown', arguments.callee);

    // Add your own easter egg here!!
    $.getScript('http://www.cornify.com/js/cornify.js', function() {
      cornify_add();
      $(document).keydown(cornify_add);
    });


  }
});