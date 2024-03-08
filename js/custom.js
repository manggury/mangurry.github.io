$(function () {
    $('.utils_wrap').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $('.gnb ul li').on('mouseenter', function () {
        $(this).toggleClass('on');
    }).on('mouseleave', function () {
        $(this).toggleClass('on');
    });

    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    $('.totop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});