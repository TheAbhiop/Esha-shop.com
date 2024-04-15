$(document).ready(function () {

    // owlCarousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<img src="images/left-arow.svg" >', '<img src="images/right-arow.svg" >'],
        autoplay: true,
        autoplaytimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // owlCarousel close


    $('.jack').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<img src="images/left-arow.svg" >', '<img src="images/right-arow.svg" >'],
        autoplay: true,
        autoplaytimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })





    $('.abhi').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        // autoplay: true,
        // autoplaytimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })


    // slik slider

    $('.responsive').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



});