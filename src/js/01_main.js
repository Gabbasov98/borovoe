$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });


    $(".header__burger").click(function() {
        $(".header__mob").addClass("header__mob--active")
    })
    $(".header__close").click(function() {
        $(".header__mob").removeClass("header__mob--active")
    })


});