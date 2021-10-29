$(document).ready(function () {
    // $(function () {
    //     let $slider = $('.proposal__slick');

    //     if ($slider.length) {
    //         let currentSlide;
    //         let slidesCount;
    //         let sliderCounter = document.createElement('div');
    //         sliderCounter.classList.add('slider__counter');

    //         let updateSliderCounter = function (slick, currentIndex) {
    //             currentSlide = slick.slickCurrentSlide() + 1;
    //             currentSlide = currentSlide < 10 ? "0" + currentSlide : currentSlide;
    //             slidesCount = slick.slideCount;
    //             slidesCount = slidesCount < 10 ? "0" + slidesCount : slidesCount;
    //             $(sliderCounter).html(currentSlide + '<span class="line">/</span>' + slidesCount)
    //         };

    //         $slider.on('init', function (event, slick) {
    //             $slider.prepend(sliderCounter);
    //             // $('.slider-main__title').prepend(sliderCounter);
    //             updateSliderCounter(slick);
    //         });

    //         $slider.on('afterChange', function (event, slick, currentSlide) {
    //             updateSliderCounter(slick, currentSlide);
    //         });

    //         $slider.slick({
    //             dots: false,
    //             arrows: false,
    //             speed: 500,
    //             fade: true,
    //             cssEase: 'linear',
    //             prevArrow: $('.slick-proposal__prev'),
    //             nextArrow: $('.slick-proposal__next'),
    //             responsive: [{
    //                 breakpoint: 767,
    //                 settings: 'unslick'
    //             }]
    //         });
    //     }
    // });

    // $('.proposal__slick').slick({
    //     dots: false,
    //     arrows: false,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear',
    //     prevArrow: $('.slick-proposal__prev'),
    //     nextArrow: $('.slick-proposal__next'),
    //     responsive: [{
    //         breakpoint: 767,
    //         settings: 'unslick'
    //     }]
    // })

    $('.partners__slick').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        }]
    });

    $(".hero__slick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: 'swing', // see http://api.jquery.com/animate/
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        customPaging: function (slick, index) {
            currentSlide = index + 1;
            currentSlide = currentSlide < 10 ? "0" + currentSlide : currentSlide;
            return '<a>' + currentSlide + '</a>';
        },
        responsive: [{
            breakpoint: 1440,
            settings: {
                dots: false
            }
        }]
    });

    $(".hero__pagination a").click(function (e) {
        e.preventDefault();
        $(".hero__pagination a").removeClass('active');
        $(this).addClass('active');
        slideIndex = $(this).index();
        console.log(slideIndex);
        $('.hero__slick').slick('slickGoTo', slideIndex);
    });

    $('.news-slider').slick({
        arrows: false,
        dots: true,
        mobileFirst: true,
        responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })

    if (document.documentElement.clientWidth < 1025 && document.documentElement.clientWidth > 768) {
        $('.news__item.slick-active:last').addClass('opacity');
        $('.news-slider').on('afterChange', function (event, slick, currentSlide) {
            $('.news__item.slick-active').removeClass('opacity');
            $('.news__item.slick-active:last').addClass('opacity');
        });
    }





    // $(".proposal__pagination a").click(function (e) {
    //     e.preventDefault();
    //     $(".proposal__pagination a").removeClass('active');
    //     $(this).addClass('active');
    //     slideIndex = $(this).index();
    //     console.log(slideIndex);
    //     $('.proposal__slick').slick('slickGoTo', slideIndex);
    // });

    $('#burger').click(function () {
        $('#burger').toggleClass('active');
        // $('#menu').toggleClass('active');
        $('#menu').fadeToggle();
        $('body').toggleClass('overflow');
    })

    $('.toggle').click(function () {
        $(this).siblings().slideToggle();
    });

    $('.faq__tab').click(function () {
        $(this).toggleClass('active');
    })

    $('.news__show').click(function () {
        $(this).siblings('.news__text').toggleClass('current');
        if ($(this).text() == 'развернуть') {
            $(this).text('свернуть');
        } else {
            $(this).text('развернуть');
        }
    })


});