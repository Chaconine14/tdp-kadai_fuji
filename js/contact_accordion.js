$(".p-contact__form").hide();

$(".js-contact.is-open")
    .next(".p-contact__form")
    .show();

$(".js-contact").on("click", function () {
    $(this).toggleClass("is-open");
    $(this).next(".p-contact__form").stop().slideToggle(300);
});


$(function () {
    const hash = location.hash;

    if (hash) {
        const target = $(hash);

        if (target.length) {
            target.find(".js-contact").addClass("is-open");
            target.find(".p-contact__form").show();

            $("html, body").animate({
                scrollTop: target.offset().top
            }, 500);
        }
    }
});