/* Preloader */

$(window).on('load', function () {
    $('#status').delay().fadeOut();
    $('#preloader').delay().fadeOut('slow');

});

/* Team */

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        margin: 15,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*=============================================
                Progress Bars
/*=============================================*/

$(function () {
    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });
});

/*=============================================
                responsive tabs
/*=============================================*/

$(function() {
   
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
        
    });
});