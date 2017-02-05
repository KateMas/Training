$(document).ready(function () {
   $('.js-navtoggle').on('click', function (e) {
       e.preventDefault();
       $('header').toggleClass('open');
       $('.js-navigation').toggleClass('open-navigation');
   });
    $('.js-navigation').on('click', 'a', function(e){
        $('header').removeClass('open');
        $('.js-navigation').removeClass('open-navigation');
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 80}, 1500);
    });

    // var $menu = $('.menu');
    // $( window ).resize(function() {
    //     var $windowWidth = $(window).outerWidth();
    //     if ($windowWidth > 700) {
    //         $(".menu li").hover(
    //             function () {
    //                 $(this).children(".sub-menu").stop(true, true).slideDown('slow');
    //             },
    //             function () {
    //                 $(this).children(".sub-menu").stop(true,true).slideUp('medium');
    //             }
    //         );
    //     } else {
    //         $(".menu li:first-child .sub-menu").show();
    //
    //         $(".menu > .menu-item > a").click( function (e) {
    //             var $subMenu = $(this).parent().find(".sub-menu");
    //             e.preventDefault();
    //             if ($subMenu.has(":visible").length > 0) {
    //                 return;
    //             }
    //             $(".menu li .sub-menu:visible").slideUp('slow');
    //             $subMenu.slideDown('slow');
    //
    //         });
    //
    //         $menu.find('.sub-menu a').click(function (e) {
    //             e.preventDefault();
    //             var src = $(this).attr('href');
    //             $menu.on('webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd', function () {
    //                 window.location.href = src;
    //             });
    //             $menu.removeClass('open-menu');
    //         })
    //     }
    // });
    // $(window).resize();
    $('.new a').on('click', function (e) {
        e.preventDefault();
        var button = $('<button>click me</button>');
        $(this).parent().append(button);
    })
});