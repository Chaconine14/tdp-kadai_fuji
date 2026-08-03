$(".js-faq_q").on("click", function () {

    $(this).toggleClass("is-open");
    $(this).next(".js-faq_a").stop().slideToggle(300);

});