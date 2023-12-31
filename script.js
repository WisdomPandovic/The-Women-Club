// Change navbar background color on scroll
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').removeClass('transparent-navbar').addClass('solid-navbar');
        } else {
            $('.navbar').removeClass('solid-navbar').addClass('transparent-navbar');
        }
    });
});
