$(function () {
    $(".js-gnav .js-gnav__ul>li").hover(function () {
        // ロールオーバー時の挙動
        $(".js-gnav__sub", this).stop().slideDown(600);
    }, function () {
        // ロールアウト時の挙動
        $(".js-gnav__sub", this).stop().slideUp(300);
    });
});