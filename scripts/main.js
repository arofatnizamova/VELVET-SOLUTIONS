$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
    $('.slick-slider').each(function () {
        let slider = $(this);
        let options = {
            prevArrow: slider.parent().find('.slider-prev'),
            nextArrow: slider.parent().find('.slider-next'),
            infinite: true,
            autoPlay: true,
        }
        let extraOptions = {}
        if (slider.hasClass('industries')) {
            extraOptions = {
            slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                autoPlay: true,
            responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 3.5,
            slidesToScroll: 1,
            dots: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
            dots: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            }
                },
        ]
            }
        }else if (slider.hasClass('cards')) {
            extraOptions = {
            slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                autoPlay: true,
                adaptiveHeight: true,
            responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            dots: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            adaptiveHeight: true,
            }
        },{
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            }
                },
        ]
            }
        }else if (slider.hasClass('team')) {
            extraOptions = {
            slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                autoPlay: true,
                adaptiveHeight: true,
            responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            dots: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            adaptiveHeight: true,
            }
        },{
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            }
                },
        ]
            }
        }
      slider.slick($.extend({}, extraOptions, options ));
    })
});

