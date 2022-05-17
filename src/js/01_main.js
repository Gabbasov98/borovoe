function sliderGallery() {
    var swiper = new Swiper('.gallery .swiper', {
        slidesPerView: 3,
        spaceBetween: 25,
        navigation: {
            nextEl: ' .gallery .swiper-button-next',
            prevEl: ' .gallery .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 25,
            }
        }
    })
}


$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });

    sliderGallery()

    $(".header__burger").click(function() {
        $(".header__mob").addClass("header__mob--active")
    })
    $(".header__close").click(function() {
        $(".header__mob").removeClass("header__mob--active")
    })


});