jQuery(document).ready(function ($) { 
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        var header = $('.header');

        if (scrollTop > 100) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    });

    $('.header__logoLink').on('click', function(event) {
        event.preventDefault(); // リンクのデフォルト動作を無効化
        $('html, body').animate({ scrollTop: 0 }, 1000); // スムーズにトップへスクロール（500ms）
    });



    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();  // デフォルトのページ内リンク動作を無効化
            const targetId = this.getAttribute('href'); // クリックされたリンクのhref属性を取得
            const target = document.querySelector(targetId); // 取得したIDからターゲット要素を選択
    
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,  // スクロール位置を50px分調整
                    behavior: 'smooth'           // スムーズなスクロール動作
                });
            }
        });
    });
});
