$(".js-access").on("click", function () {

    $(this).toggleClass("is-open");
    $(this).next(".p-access__list").stop().slideToggle(300);

});