let hotelSlidersArray = []

function hotelSliders() {
    $(".hotel__slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        hotelSlidersArray[index] = new Swiper(`.hotel__slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: `.hotel__slider[data-slider-id="${index}"] .swiper-pagination`,
                type: 'bullets',
                clickable: true,
            },
        })
    })
}

function additionalSlider() {
    var swiper = new Swiper('.additional .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.additional .swiper-button-next',
            prevEl: '.additional .swiper-button-prev',
        },
        pagination: {
            el: '.additional .swiper-pagination',
            type: 'custom',
            clickable: true,
            renderCustom: function(swiper, current, total) {
                return `<span class="swiper-pagination-current">${('0' + current).slice(-2)}</span>  ` + '/ ' + ('0' + total).slice(-2);
            }
        },

    })
}

function servicesSlider() {
    var swiper = new Swiper('.services .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.services .swiper-button-next',
            prevEl: '.services .swiper-button-prev',
        },
        pagination: {
            el: '.services .swiper-pagination',
            type: 'custom',
            clickable: true,
            renderCustom: function(swiper, current, total) {
                return `<span class="swiper-pagination-current">${('0' + current).slice(-2)}</span>  ` + '/ ' + ('0' + total).slice(-2);
            }
        },

    })
}

$(document).ready(function() {

    hotelSliders()
    additionalSlider()
    servicesSlider()

    setBg()

    function setBg() {
        $(".additional .swiper-slide").each(function(index, el) {
            let mobBg = $(this).attr("data-mob-bg")
            let dekstopBg = $(this).attr("data-dekstop-bg")

            if (window.innerWidth > 768) {
                $(this).css("background-image", `url(${dekstopBg})`)
            } else {
                $(this).css("background-image", `url(${mobBg})`)
            }
        })

        $(".services .swiper-slide").each(function(index, el) {
            let mobBg = $(this).attr("data-mob-bg")
            let dekstopBg = $(this).attr("data-dekstop-bg")

            if (window.innerWidth > 768) {
                $(this).css("background-image", `url(${dekstopBg})`)
            } else {
                $(this).css("background-image", `url(${mobBg})`)
            }
        })

        $(".timetable").each(function(index, el) {
            let mobBg = $(this).attr("data-mob-bg")
            let dekstopBg = $(this).attr("data-dekstop-bg")

            if (window.innerWidth > 900) {
                $(this).css("background-image", `url(${dekstopBg})`)
            } else {
                $(this).css("background-image", `url(${mobBg})`)
            }
        })
    }



    $(window).resize(function() {
        setBg()
    })




    // style = "background-image: url(img/additional.webp);"

})