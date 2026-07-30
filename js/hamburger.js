$(function () {

    //ハンバーガーボタンをクリックした時
    $(".js-hamburger").click(function () {
        //ハンバーガーボタンの挙動
        $(this).toggleClass("close");
        //ドロワーナビゲーションの挙動
        $(".js-drawer").toggleClass("is-open");
        // bodyのスクロールを制御
        $("body").toggleClass("is-open");
    });

    //ナビゲーションをクリックしたとき
    $(".js-drawer ul li a").click(function () {
        //ハンバーガーボタンの挙動
        $(".js-hamburger").removeClass("close");
        //ドロワーナビゲーションの挙動
        $(".js-drawer").removeClass("is-open");
        // bodyのスクロールを元に戻す
        $("body").removeClass("is-open");
    });

});