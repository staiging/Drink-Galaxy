
(function($){
	$(function(){



        /*  Header */
        if($(".main-header-section").length){
            var $header = $(".main-header-section"),
                $clone = $header.before($header.clone().addClass("fixedTop")),
                $fixedHeader = $('.fixedTop'),
                $mainHeaderHeight = $header.outerHeight() + 150,
                $headerHeight = $fixedHeader.outerHeight(),
                lastPos = 0;
            if ($(window).width() >= 320) {
                $fixedHeader.css({
                    top: - $headerHeight
                });
                $(window).resize(function () {
                    $headerHeight = $fixedHeader.outerHeight();
                });

                $(window).on("scroll resize", function () {
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {

                        //$fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").addClass("started");

                        if (fromTop > lastPos) {
                            $fixedHeader.css({
                                top: 0
                            });
                        }
                        lastPos = fromTop;


                    } else {
                        $fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").removeClass("started");

                    }
                });


            } else{
                $(window).on("scroll", function(){
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {
                        $("body").addClass("over-header");
                    }else{
                        $("body").removeClass("over-header");
                    }
                })
            }
        }


        var headerHeight = $('#main-header').outerHeight();
        $(window).resize(function () {
            headerHeight = $('#main-header').outerHeight();
        });

        $(document).delegate(".DeleteBtn", 'click', function () {
            alert(".DeleteBtn Click Function -  " + $(this).attr('id'));
            var DelBtnNum = $(this).attr('id');
            DelBtnNum = DelBtnNum[DelBtnNum.length - 1];
            $('#divInput' + DelBtnNum).remove();

        });



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass('nav-shown');
            $('.nav-wrap').fadeToggle();
        });




        // cart
        $('.cart-btn').click(function () {
            $("body").addClass('cart-shown');
        });
        $('.cart-close').click(function () {
            $("body").removeClass('cart-shown');
        });


        /*  Header */
   
        
       /* serves*/
        
        $(".main-nav ul > li").find("ul").parent("li").addClass("show");
        $(".main-nav ul > li").find("ul").parent("li").addClass("has-sub-nav");
        $(".main-nav ul > li.has-sub-nav > a").bind('click', 'touchend', function (e) {
            e.preventDefault();
            $(".main-nav ul > li").find("> ul:visible").slideUp()
            $(".main-nav ul > li").removeClass("active")
            if ($(this).parent().find("> ul:visible").length) {
                $(this).removeClass("active")
                $(this).parent().find("> ul").slideUp()
            } else {
                $(this).addClass("active")
                $(this).parent().find("> ul").slideDown()
            }
        })


        /* blog*/

        $(".blog-section .fixed-tab-wrap > a").removeClass("blog-tap-active")
        $(".blog-section .fixed-tab-wrap > a").eq(1).addClass("blog-tap-active")
        $("#blog-item-wrap > div.blog-item-inner").eq(1).addClass("blog-item-active")
        $(".blog-section .fixed-tab-wrap > a").each(function (i) {
            $(this).click(function (e) {
                e.preventDefault();
                if ($(this).hasClass("blog-tap-active")) return false
                else {
                    $(".blog-section .fixed-tab-wrap > a").removeClass("blog-tap-active")
                    $(this).addClass("blog-tap-active")
                    $("#blog-item-wrap > div.blog-item-inner").removeClass("blog-item-active")
                    $("#blog-item-wrap > div.blog-item-inner").eq(i).addClass("blog-item-active")
                }
            })

        });
        
        if($('.blog-wrap').length){
            $('body').addClass('blog-wrap-main');
        }
        

        /* blog*/

        
        //product quantity
        $(function() {
            $(".button").on("click", function() {
                var $button = $(this);
                var $parent = $button.parent(); 
                var oldValue = $parent.find('.input').val();

                if ($button.text() == "+") {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    // Don't allow decrementing below zero
                    if (oldValue > 1) {
                        var newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 1;
                    }
                }
                $parent.find('a.add-to-cart').attr('data-quantity', newVal);
                $parent.find('.input').val(newVal);
            });
        });

        
   /* home*/
        
        
        
        // This function for scroll animation

        var $animation_elements = $('.animate-from-bottom, .animate-from-left, .animate-from-right');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        

        var inview = function(elem){
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).outerHeight();
            var vpTop = $(window).scrollTop();
            var vpBottom = vpTop + $(window).height();
            return elemBottom > vpTop && elemTop < vpBottom;
        };
        (function flexibleanim(){
            $(window).on("scroll",function() {
                var fade = function(index) {
                    var glitem = $('#store-item-wrap > .store-item');
                    glitem.eq(index).animate({
                        opacity: 1
                    },500, function() {
                        if (index < glitem.length) {
                            fade(index + 1);
                        }
                    })
                }

                if(inview("#store-item-wrap")){
                    var tr = setTimeout(function(){
                        fade(0);
                    },500);
                    // $(window).off("scroll");
                }
            });
        })();
       
        var inview = function(elem){
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).outerHeight();
            var vpTop = $(window).scrollTop();
            var vpBottom = vpTop + $(window).height();
            return elemBottom > vpTop && elemTop < vpBottom;
        };
        (function flexibleanim(){
            $(window).on("scroll",function() {
                var fade = function(index) {
                    var glitem = $('#store-item-wrap-two > .store-item');
                    glitem.eq(index).animate({
                        opacity: 1
                    },500, function() {
                        if (index < glitem.length) {
                            fade(index + 1);
                        }
                    })
                }

                if(inview("#store-item-wrap-two")){
                    var tr = setTimeout(function(){
                        fade(0);
                    },500);
                    // $(window).off("scroll");
                }
            });
        })();

        // End animation function
        
        
        
        /*story-slider*/
        
        if($('#story-slider-nav').length){
            $('#story-slider-nav').slick({
                arrows:false,
                infinite: false,
                navigation:false,
                slidesToShow:1,
                slidesToScroll: 1,
                autoplaySpeed: 1500,
                speed: 1500,
                fade: true,
                asNavFor: '.duppy-story-slider',
                dots:false,
                centerMode: false,
                focusOnSelect: true
            });
            $(window).on('resize', function () {
                $('#story-slider-nav').slick('resize');

            });
        }
        
        if($('.duppy-story-slider').length){
            $('.duppy-story-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                asNavFor: '#story-slider-nav',
                autoplaySpeed: 1500,
                speed: 1500,
                loop: false,
                arrows:false,
                dots:true,
                infinite:true,
            });
        }
        
        /*story-slider*/
        

        if($('.wild-info-slider').length){
            $('.wild-info-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: false,
                autoplaySpeed: 1500,
                speed: 1500,
                loop: false,
                arrows:false,
                dots:true,
                infinite:true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            infinite: false,
                            swipe: true,
                            loop: true,
                            dots:false,
                        }
                    },
                   
                ]

            });
        }
        $(window).on('resize', function () {
            $('.wild-info-slider').slick('resize');
        });

        
        
        
        
        if($('.store-item-slider').length){
            $('.store-item-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                loop: false,
                arrows:false,
                dots:false,
                infinite:true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            arrows: true,
                            infinite: false,
                            centerMode: true,
                            centerPadding: '30px',
                            swipe: true,
                            loop: true,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('.store-item-slider').slick('resize');
        }); 
        
        
        if($('.gallery-item-slider').length){
            $('.gallery-item-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                loop: false,
                arrows:false,
                dots:false,
                infinite:true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            arrows: true,
                            infinite: false,
                            centerMode: true,
                            centerPadding: '30px',
                            swipe: true,
                            loop: true,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('.gallery-item-slider').slick('resize');
        });
        /* home*/
        
        
        /* cart*/
        if($('.cart-item-slider').length){
            $('.cart-item-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                loop: false,
                arrows:false,
                dots:false,
                infinite:true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            arrows: true,
                            infinite: false,
                            centerMode: true,
                            centerPadding: '92px',
                            swipe: true,
                            loop: true,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('.cart-item-slider').slick('resize');
        }); 
        /* cart*/
        
        
    
        
        
        

        /*serves*/
        if($('#serves-slider').length){
            $('#serves-slider').slick({
                dots: false,
                arrows:true,
                autoplay:false,
                autoplaySpeed:5000,
                infinite: true,
                navigation:false,
                speed: 300,
                slidesToShow:1,
                slidesToScroll: 1,

                responsive: [{
                    breakpoint: 768,
                    settings: "unslick"
                },
                            ]
            });

        }
        $(window).on('resize', function () {
            $('#serves-slider').slick('resize');
        });




        if($('#serve-aged-slider-wrap .serve-aged-slider').length){
        $('#serve-aged-slider-wrap .serve-aged-slider').slick({
            dots: false,
            arrows:true,
            autoplay:false,
            autoplaySpeed:5000,
            infinite: true,
            navigation:false,
            speed: 300,
            slidesToShow:4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 768,
                settings: "unslick"
            },
                        ]
        });
        }
        $(window).on('resize', function () {       
            $('#serve-aged-slider-wrap .serve-aged-slider').slick('resize'); 
        });


        $(".serves-detail-page .fixed-tab-wrap > a").removeClass("tab-active")
        $(".serves-detail-page .fixed-tab-wrap > a").eq(0).addClass("tab-active")
        $("#serve-aged-slider-wrap > div.serve-aged-slider-inner").eq(0).addClass("item-active")
        $(".serves-detail-page .fixed-tab-wrap > a").each(function (i) {
            $(this).click(function (e) {
                e.preventDefault();
                if ($(this).hasClass("tab-active")) return false
                else {
                    $(".fixed-tab-wrap > a").removeClass("tab-active")
                    $(this).addClass("tab-active")
                    $("#serve-aged-slider-wrap > div.serve-aged-slider-inner").removeClass("item-active")
                    $("#serve-aged-slider-wrap > div.serve-aged-slider-inner").eq(i).addClass("item-active")
                }
            })

        });
        
        
        if($('.serves-page').length){
           $('body').addClass('serves-page-main');
        }
        
        
       if($('.serves-detail-page').length){
                $('body').addClass('serves-detail-main');
           }
       /* serves*/
        
        
       /* find-us*/
        if($('.find-us').length){
            $('body').addClass('find-us-main');
           }
        
        

        $(".find-us .fixed-tab-wrap > a").removeClass("active-btn")
        $(".find-us .fixed-tab-wrap > a").eq(0).addClass("active-btn")
        $(".find-us-tab-item-wrap > .find-us-tab-item").eq(0).addClass("find-us-item-active")
        $(".find-us .fixed-tab-wrap > a").each(function (i) {
            $(this).click(function (e) {
                e.preventDefault();
                if ($(this).hasClass("active-btn")) return false
                else {
                    $(".find-us .fixed-tab-wrap > a").removeClass("active-btn")
                    $(this).addClass("active-btn")
                    $(".find-us-tab-item-wrap > .find-us-tab-item").removeClass("find-us-item-active")
                    $(".find-us-tab-item-wrap > .find-us-tab-item").eq(i).addClass("find-us-item-active")
                }
            })

        });

       /* find-us*/
        
        
        
        /* Shop */
        if ($("select.product-select").length) {
            $("select.product-select").selectric();
        }
        if($('.shop-content').length){
            $('body').addClass('shop-content-main');
        }
        /* Shop */
    
        
        
        /* Shop Details page */

        if ($(".shop-details").length) {
            $("body").addClass('shop-details-page');
        }


        if($('#product-details-slider').length){
            $('#product-details-slider').slick({
                dots: false,
                arrows:true,
                autoplaySpeed:2000,
                infinite: true,
                navigation:false,
                speed: 1000,
                slidesToShow:1,
                slidesToScroll: 1,
                asNavFor: '#product-slider-nav',
                responsive: [

                    {
                        breakpoint: 768,
                        settings: {
                            dots:false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            controlNav: false,
                            directionNav: false,
                            arrows: false,
                            loop: false,
                            centerMode: true,
                            centerPadding: "30px",
                        }
                    },

                ]

            });
            $(window).on('resize', function () {
                $('#product-details-slider').slick('resize');

            });
        } 

        if($('#product-slider-nav').length){
            $('#product-slider-nav').slick({

                arrows:true,
                infinite: false,
                navigation:false,
                slidesToShow:6,
                slidesToScroll: 6,
                asNavFor: '#product-details-slider',
                dots:false,
                centerMode: false,
                focusOnSelect: true

            });
            $(window).on('resize', function () {
                $('#product-slider-nav').slick('resize');

            });
        }
        /* Shop Details page */

        if($('#free-deliveries-slider').length){
            $('#free-deliveries-slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '60px',
                autoplay: true,
                autoplaySpeed: 0,
                infinite: true,
                speed: 10000,
                cssEase:'linear',
                centerMode: true,
                variableWidth: true,
                pauseOnFocus: false,
                pauseOnHover: false,
                draggable: false,
                focusOnSelect:false,
                initialSlide:1,
                arrows:false,

            });
        }
        $(window).on('resize', function () {       
            $('#free-deliveries-slider').slick('resize'); 
        });
        
       
        $(window).scroll(function() {
          var theta = $(window).scrollTop() / 300 % Math.PI;
            $('.play-duppy').css({ transform: 'rotate(' + theta + 'rad)' });
        });
        
         if ($('.rellax').length) {
            var rellax = new Rellax('.rellax');
        }
       $(window).on('scroll',function(){
                var cloudPosition = Math.round($(window).scrollTop() / $(window).height() * 100);
            $('.home-product-left-imgs .cloud').css('transform','translateX('+(cloudPosition-130)+'%)');

        });
        
        
         $(window).on('scroll',function(){
            var sunPosition = Math.round($(window).scrollTop() / $(window).height() * 100);
            $('#sun-one').css('transform','translateX('+(-(sunPosition-160))+'%)');

        });
        
        
        
        $(window).on('scroll',function(){
            var sunPosition = Math.round($(window).scrollTop() / $(window).height() * 100);
            $('#sun-two').css('transform','translateY('+((sunPosition-180))+'%)');

        });
         
        $(window).on('scroll',function(){
            var sunPosition = Math.round($(window).scrollTop() / $(window).height() * 100);
            $('#sun-three').css('transform','translateY('+((sunPosition-100))+'%)');

        });
        
     
        $('.play-duppy').click(function(e){
            e.preventDefault()
            $('.story-video').fadeIn();
            $('body').addClass('video-show');
        });
       
        $('.video-close').click(function(){
            $('.story-video').fadeOut();
            $('body').removeClass('video-show');
        });
       
		
	})// End ready function.
   
    
  


})(jQuery);

