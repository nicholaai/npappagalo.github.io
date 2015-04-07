$( ".page-scroll" ).click(function() {
  $("html, body").animate({
      scrollTop: $("#connect").offset().top
    }, 1000);
});

$( ".page-scroll1" ).click(function() {
  $("html, body").animate({
      scrollTop: $("#about").offset().top
    }, 1000);
});

$( ".page-scroll2" ).click(function() {
  $("html, body").animate({
      scrollTop: $("#service").offset().top
    }, 1000);
});

$( ".page-scroll3" ).click(function() {
  $("html, body").animate({
      scrollTop: $("#headerwrap").offset().top
    }, 1000);
});