$(".js-tab").on("click", function () {

    $(".js-tab").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-tab-content").removeClass("is-active");
    $(".js-tab-content").eq($(this).index()).addClass("is-active");

});