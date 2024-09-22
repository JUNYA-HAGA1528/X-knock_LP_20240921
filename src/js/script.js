jQuery(document).ready(function ($) { 
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        var header = $('.header');

        if (scrollTop > 100) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    });
});
