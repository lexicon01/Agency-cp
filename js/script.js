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

$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'

    });
});

/*=============================================
                Portfolio
/*=============================================*/

$(window).on('load', function () {
    // Initialize isotp
    $('#isotope-container').isotope({

    });
    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        // get filter value
        var filterValue = $(this).attr('data-filter');

        // Filter portfollio
        $('#isotope-container').isotope({
            filter: filterValue
        });

        // Active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*=============================================
                magnifier
/*=============================================*/

$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it opoup will something
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*=============================================
                Testimonials
/*=============================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
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
                Counter
/*=============================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*=============================================
               End of  Counter
/*=============================================*/

/*=============================================
                Clients
/*=============================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
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
               End of Clients
/*=============================================*/

/*=============================================
               Google Map
/*=============================================*/

$(window).on('load', function () {
    // Map Variables
    var addressString = '230 Broadway, NY, Yew York 10007, USA';
    var myLatlng = {
        lat: 40.712685,
        lng: -74.005920
    };

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng

    });

    // Add  Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "click to see address"
    });

    // Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString

    });

    // show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
});

/*=============================================
               End of google map
/*=============================================*/

/*=============================================
               Navigation
/*=============================================*/

/* show & High white navigation */

$(function () {
    // show/hide nav on page load
    showHideNav();// 
    
    $(window).scroll(function () {
       //show/ hide nav on window's scrool
        showHideNav();// without this way 
    });
    
    function showHideNav() {
         let position = $(window).scrollTop();
        if (position > 71) {

            // show white nav 
            $('nav').addClass('white-nav-top');

            // show dark logo
            $('.navbar-brand img').attr('src', 'img/solo-images/logo/logo-dark.png');
        } else {

            // Hide white nav 
            $('nav').removeClass('white-nav-top');

            // show togo
            $('.navbar-brand img').attr('src', 'img/solo-images/logo/logo.png');
        }
    }
});

/*=============================================
               scroll spy 
/*=============================================*/
/*$(document).ready(function () {
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
});*/
/*=============================================
               smooth scrolling
/*=============================================*/

$(function() {
    $('a.smooth-scroll').click(function (event) {
        event.preventDefault();
        
        // get section id linke #about, #service, #team and etc.
        var section_id = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(section_id).offset().top - 30
        }, 1250);
    });
});



