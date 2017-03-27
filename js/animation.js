$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".log-header").removeClass("home-log");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".log-header").addClass("home-log");
    };
});

$(function () { 
  $("[data-toggle='tooltip']").tooltip(); 
});

$(function() {
    $('body').on('focus', '.btn', function(event) {
        this.blur()
    });
});