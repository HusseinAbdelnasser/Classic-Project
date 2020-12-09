$(function () {

    'use strict';

    var winH  = $(window).height();
    

    $('.slider,.carousel-item').height(winH);
});


// navbar background color changing with scroll

$(function () {
  
    $(window).scroll(function(){
        
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >=600) {

            navbar.addClass('scrolled');

        } else {

            navbar.removeClass('scrolled');
        }
        
    });
 });


$(function(){

    $(".navbar-light .navbar-nav .nav-link").on("click", function(){

        $(this).removeClass('active').siblings().addClass('active');
    });
});


// projects section

$(function(){

    $(".projects ul li").on("click", function(){

        $(this).addClass("active").siblings().removeClass("active");

        if($(this).data('class') === 'all'){

            $('.shuffle_images .col-lg-4').animate({
                opacity:1
            },1000);
        }else{
             
            $('.shuffle_images .col-lg-4').animate({
                opacity:.08
            },1000);
            $($(this).data('class')).animate({
                opacity:1
            },1000);
        }
    });

});

// smooth scroll

$(function(){

    $(".navbar .navbar-nav .nav-item .nav-link").on("click" , function(){

        $('html,body').animate({

            scrollTop:$('#' + $(this).data('value')).offset().top
        },1000)
    });
});



$(function(){

    $(".navbar .navbar-nav .nav-item .nav-link").on("click" ,function(){

        $(this).addClass('active').siblings().removeClass('active')
    });
});


/*
$(function(){

    $('.our_team img').hover(function(){

        $(".overlay").css("display","block")
    });

    $('.our_team img').mouseleave(function(){

        $(".our_team .overlay").css("display","none")
    });
});
*/

// trigger nice  scroll

$(function(){
    
    $('html').niceScroll({

        cursorcolor:"#1abc9c" ,

        cursorwidth:'7px' ,

        cursorborder:'1px solid #1abc9c' ,

        cursorborderradius:'0'
    })
});

// scroll to top
 
$(function(){

    $(window).on("scroll", function(){

        if($(window).scrollTop() >= 700){
            $(".scroll").fadeIn(1000)

        }else{
            
            $(".scroll").fadeOut(1000)
        }
    });

    $(".scroll").on("click", function(){

        $("html , body").animate({
            scrollTop:0
        }, 1000)
    });
        
 });
