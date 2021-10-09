'use strict';

let goTopButton = document.querySelector('.back-to-top');

window.onscroll = function () {
    trackScroll();
}

function trackScroll(){
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > 150) {
        goTopButton.classList.add('back-to-top-show');
    } else {
        goTopButton.classList.remove('back-to-top-show');
    }
}

goTopButton.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});