$(function() {

    $(window).on("load", function() {
        //chip-width-----------------------------------------------
        var width = 0;
        $('.chips').each(function() {
            width += $(this).outerWidth(true);
        });
        $('ul.chips-list').css('width', width);
    });

    //animation trigger
    $('#logo-wrapper svg').on('click', function() {
        var backgroundWrapper = $('.background-wrapper div');
        backgroundWrapper.addClass('play-ani');
        //animation class removed after animation
        backgroundWrapper.on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
            $(this).removeClass('play-ani');
        });
    });


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
    }

    //fab open
    $('.fab').on('click', function() {
        fabOpen();
    });

    //fab close
    $('.overlay, .icon-close').on('click', function() {
        fabClose();
    });

    $(".fab-header-wrapper").children().on('click', function(event) {
        event.stopPropagation();
    });

    // qualification btn animation
    var FourButtons = $('.b-one, .b-two, .b-three, .b-four');

    FourButtons.on('click', function() {
        $(this).addClass('b-open');
        FourButtons.not(this).removeClass('b-open');

        $(this).children().addClass('shift');
        FourButtons.not(this).children().removeClass('shift');

        $(this).children('.edu').removeClass('hide');
        FourButtons.not(this).children('.edu').addClass('hide');
    });

    $('.s-b-one,.s-b-two,.s-b-three,.s-b-four').on('click', function() {
        FourButtons.not(this).removeClass('b-open');
        FourButtons.not(this).children().removeClass('shift');
        FourButtons.not(this).children('.edu').addClass('hide');
    });


    //chips-selection-----------------------------------------
    $('.chips').on('click', function() {
        $(this).addClass('chip-clicked');
        $('.chips').not(this).removeClass('chip-clicked');
    });

    //chip-filter---------------------------------------
    var card = $('.card');
    $('.all-chips').on('click', function() {
        card.not('.card').addClass('card-hidden');
        $('.all-chips').addClass('chip-clicked');
        $('.chips').not('.all-chips').removeClass('chip-clicked');
    });

    $('.all-chips, ul.chips-list li').on('click', function() {
        card.removeClass('card-hidden');
    });

    var chipsClasses = ['.icons-chips', '.websites-chips',' .land-chips','.illus-chips', '.apps-chips',' .macro-chips','.uiux-chips', '.web-apps-chips' ,'.port-chips','.elements-chips', '.wild-chips'];
    var selectClasses = ['.select-icons','.select-websites',' .select-land','.select-illus','.select-apps', '.select-macro','.select-uiux', '.select-web-apps', '.select-port','.select-elements', '.select-wild'];

    $.each(chipsClasses, function(i, item) {
        $(chipsClasses[i]).on('click', function() {
            card.not(selectClasses[i]).addClass('card-hidden');
        });
    });

    //opening files
    $('.open-logo').on('click', function() {
        var path = $(this).closest('.card').find('.img').attr('src');
        $('.open-logo').parent().attr('href', path);
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

    $(window).scroll(function() {
        if ($(window).scrollTop() > 310) {
            $('#chips-wrapper').css({
                'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.3)'
            });

        } else {
            $('#chips-wrapper').css({
                'box-shadow': 'none'
            });
        }
    });

});
