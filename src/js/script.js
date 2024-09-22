
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 300) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    

});
