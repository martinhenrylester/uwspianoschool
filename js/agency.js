/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
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

$('a.close-ribbon').on('click', function(){
    $('div.sale-modal').hide();
});

$('a.page-scroll').on('click', function(){
    $('div.sale-modal').hide();
});

$('.in-studio-button').on('click', function(){
    $('.in-studio-rates').show();
    $('.in-home-rates').hide();
    $('.online-rates').hide();
    $('.in-studio-button').css('background-color', 'darkgray');
    $('.in-home-button').css('background-color', 'none');
    $('.online-button').css('background-color', 'none');
});

$('.in-home-button').on('click', function(){
    $('.in-studio-rates').hide();
    $('.in-home-rates').show();
    $('.online-rates').hide();
    $('.in-studio-button').css('background-color', 'none');
    $('.in-home-button').css('background-color', 'darkgray');
    $('.online-button').css('background-color', 'none');
});

$('.online-button').on('click', function(){
    $('.in-studio-rates').hide();
    $('.in-home-rates').hide();
    $('.online-rates').show();
    $('.in-studio-button').css('background-color', 'none');
    $('.in-home-button').css('background-color', 'none');
    $('.online-button').css('background-color', 'darkgray');
});
