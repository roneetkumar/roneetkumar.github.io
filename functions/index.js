$(function() {
    //hide elements on start
    $('.overlay, h1.fab-title, .icon-close, .form-wrapper, svg.done').hide();

    //fab open function
    function fabOpen() {
        $('.btn-mail').fadeOut(350)
        $('.fab').addClass('fab-open');
        $('.overlay').fadeIn(700);
        $('.fab-header').addClass('fab-header-open');
        $('h1.fab-title, .icon-close').delay(400).fadeIn();
        $('.form-wrapper').delay(350).fadeIn(0);
        $('body, html').css({
            'overflow': 'hidden'
        });
    }

    //fab close function
    function fabClose() {
        $('.btn-mail').fadeIn(350);
        $('.fab').removeClass('fab-open');
        $('.overlay').fadeOut(400);
        $('.fab-header').removeClass('fab-header-open');
        $('h1.fab-title, .icon-close, .form-wrapper').fadeOut(0);
        $('.button').removeClass('f-btn-off');
        $("#form")[0].reset();
        $('body, html').css({
            'overflow': 'visible'
        });
        $('svg.send').css({
            'display': 'block'
        });
        $('svg.done').css({
            'display': 'none'
        });
        setTimeout(function() {
            $('.fab-header').removeClass('fab-header-badlo');
        }, 400);
    }

    //fab open
    $('.fab').on('click', function() {
        fabOpen();
    });

    //fab close
    $('.overlay, .icon-close').on('click', function() {
        fabClose();
    });

    // qualification btn animation

    $('.b-one, .b-two, .b-three, .b-four').on('click',function () {
        $(this).addClass('b-open');
        $('.b-one, .b-two, .b-three, .b-four').not(this).removeClass('b-open');

        $(this).children().addClass('shift');
        $('.b-one, .b-two, .b-three, .b-four').not(this).children().removeClass('shift');

        $(this).children('.edu').removeClass('hide');
        $('.b-one, .b-two, .b-three, .b-four').not(this).children('.edu').addClass('hide');

    });

    $('.s-b-one,.s-b-two,.s-b-three,.s-b-four').on('click',function () {
        $('.b-one, .b-two, .b-three, .b-four').not(this).removeClass('b-open');
        $('.b-one, .b-two, .b-three, .b-four').not(this).children().removeClass('shift');
        $('.b-one, .b-two, .b-three, .b-four').not(this).children('.edu').addClass('hide');
    });

    // contact button ani
    $('.button').on('click', function() {
        $('.button').addClass('f-btn-off');
        $('.fab-header').addClass('fab-header-badlo');
        // $("#form")[0].reset();
        setTimeout(function() {
            $('svg.send').css('display', 'none');
            $('svg.done').css('display', 'block');
        }, 400);
    });

    //animation trigger
    $('.logo').on('click', function() {
        $('.cir-1,.cir-2,.cir-3,.cir-4').addClass('play-ani');
    });

    //animation class removed after animation
    $('.cir-1,.cir-2,.cir-3,.cir-4').on(
        "webkitAnimationEnd oanimationend msAnimationEnd animationend",
        function() {
            $(this).removeClass('play-ani');
        }
    );

    //mini header fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > 444) {
            $('.header').addClass('m-h-fixed');
            $('.mini-pro').css('box-shadow', '0 8px 15px -2px rgba(0,0,0,0.4)')
                // $('.pro-pic').addClass('mini-pro');
        } else {
            $('.header').removeClass('m-h-fixed');
            $('.mini-pro').css('box-shadow', 'inherit')
                // $('.header').css('background-image', 'initial');
                // $('.pro-pic').removeClass('mini-pro');
        }
    });

    //profile pic fixed and animation
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.pro-pic').addClass('mini-pro');
        } else {
            $('.pro-pic').removeClass('mini-pro');
        }
    });

    //anchor for scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});
