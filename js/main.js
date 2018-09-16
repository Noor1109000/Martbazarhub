 

    /*------------ Start support slider carousel ------------*/

    $(document).ready(function(){
        $('.support-top-header').owlCarousel({
            margin: 10,
            loop: true,
            autoplay: true,
            smartSpeed: 1600,
            dots: false,
            autoplayTimeout: 3000,
            items: 1
    
        })
      });


    /*------------ Start cart area  ------------*/
    $(document).on('click', function() {
        $('.cart-list').removeClass('show');
    });
    $('.cart-area > li').on('click', function(e) {
        $('.cart-list').addClass('show');
        $(this).removeClass('show');
        e.stopPropagation();
    })


    /*-----------slider carousel--------*/
    $(document).ready(function(){
        $('.slider-carousel').owlCarousel({
            margin: 10,
            loop: true,
            autoplay: true,
            smartSpeed: 1600,
            dots: true,
            autoplayTimeout: 3000,
            items: 1,
            responsive: {
                0:{
                    items: 1
                },
                480:{
                    items: 1
                },
                768:{
                    items: 1
                }
            }
    
        })
      });


      
    /*------------ Product-area owl-carosel ------------*/

    $(document).ready(function(){
        $('.product-area-owl-carosel').owlCarousel({
            margin: 10,
            loop: true,
            autoplay: true,
            smartSpeed: 1600,
            dots: false,
            autoplayTimeout: 3000,
            items: 1
    
        })
      });

          /*------------ sticky menu ------------*/
$(document).ready(function(){
    var navOffset = $(".sitemenu").offset().top;

    $(".sitemenu").wrap('<div class="nav-placeholder"></div>');
    $(".nav-placeholder").height($(".sitemenu").outerHeight());

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();


        if(scrollPos>=navOffset){
            $(".sitemenu").addClass("fixed");
        }
        else{
            $(".sitemenu").removeClass("fixed");

        }

    });


    });