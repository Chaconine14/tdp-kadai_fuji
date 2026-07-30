$(function () {
    $('.js-case-slider').slick();
});

$(".js-case-comment").on("click", function () {

    if (window.innerWidth <= 767) {

        $(this).parent().toggleClass("is-open");
        $(this).next("p").stop().slideToggle(300);

    }

});