"use strict";

let buyButton = document.querySelector('.tickets__buy');
let closeButton = document.querySelector('.button__close');
let overlay = document.querySelector('.overlay');
let popupWindow = document.querySelector('.buy');

buyButton.addEventListener('mousedown', (e) => {
    e.preventDefault();
    popupWindow.classList.add('buy_popup');
    overlay.classList.add('overlay_popup');
});


closeButton.addEventListener('mousedown', (e) => {
    e.preventDefault();
    popupWindow.classList.remove('buy_popup');
    overlay.classList.remove('overlay_popup');
});

overlay.addEventListener('mousedown', (e) => {
    e.preventDefault();
    popupWindow.classList.remove('buy_popup');
    overlay.classList.remove('overlay_popup');
});