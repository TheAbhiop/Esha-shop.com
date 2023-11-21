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





});