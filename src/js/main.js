$(document).ready(function () {
    $(function () {
        let $slider = $('.proposal__slick');

        if ($slider.length) {
            let currentSlide;
            let slidesCount;
            let sliderCounter = document.createElement('div');
            sliderCounter.classList.add('slider__counter');

            let updateSliderCounter = function (slick, currentIndex) {
                currentSlide = slick.slickCurrentSlide() + 1;
                currentSlide = currentSlide < 10 ? "0" + currentSlide : currentSlide;
                slidesCount = slick.slideCount;
                slidesCount = slidesCount < 10 ? "0" + slidesCount : slidesCount;
                $(sliderCounter).html(currentSlide + '<span class="line">/</span>' + slidesCount)
            };

            $slider.on('init', function (event, slick) {
                $slider.prepend(sliderCounter);
                // $('.slider-main__title').prepend(sliderCounter);
                updateSliderCounter(slick);
            });

            $slider.on('afterChange', function (event, slick, currentSlide) {
                updateSliderCounter(slick, currentSlide);
            });

            $slider.slick({
                arrows: false,
                dots: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                customPaging: function (slick, index) {
                    currentSlide = index + 1;
                    currentSlide = currentSlide < 10 ? "0" + currentSlide : currentSlide;
                    return '<a>' + currentSlide + '</a>';
                },
                prevArrow: $('.slick-proposal__prev'),
                nextArrow: $('.slick-proposal__next'),
                responsive: [{
                    breakpoint: 1920,
                    settings: {
                        dots: false
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: true,
                    }
                }]
            });
        }
    });

    // $('.hero-slick').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });
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
            breakpoint: 1920,
            settings: {
                dots: false
            }
        }]
    });

    $(".proposal__pagination a").click(function (e) {
        e.preventDefault();
        $(".proposal__pagination a").removeClass('active');
        $(this).addClass('active');
        slideIndex = $(this).index();
        console.log(slideIndex);
        $('.proposal__slick').slick('slickGoTo', slideIndex);
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
            breakpoint: 1024,
            settings: 'unslick'
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    })

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
});