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

    // const hd = gsap.timeline({
    //     pin: true,
    // });
    // hd.to(".inner", { y: 80, delay: 3, })

    const mainVisual = gsap.timeline();
    mainVisual.to(".my_slogan .rotate_txt", { rotateX: 360, speeds: 5000, duration: 2, })
    mainVisual.to(".my_slogan .rotate_txt02", { rotateX: 0, speeds: 5000, duration: 2, })
    mainVisual.to(".mainVisal .my_slogan_sub", { opacity: 1, duration: 1, })
    mainVisual.to(".mainVisal .line", { width: 1680, duration: 1, })

});