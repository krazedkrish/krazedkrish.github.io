// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    'use strict';
    // scroll to section on click
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        debugger;
        console.log($($anchor.attr('href')))
        event.preventDefault();
    });

    window.sr= new scrollReveal({
        reset: true,
        move: '50px',
        mobile: true
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// Active current url link in nav bar
$(function () {
    $("#blog a:contains('Blog')").parent().addClass('active');
    $("#projects a:contains('Projects')").parent().addClass('active');
 });
