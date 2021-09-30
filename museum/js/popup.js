"use strict";

let buyButton = document.querySelector('.tickets__buy');
let closeButton = document.querySelector('.button__close');
let popupWindow = document.querySelector('.buy');

buyButton.addEventListener('mousedown', () => popupWindow.classList.add('buy_popup'));
closeButton.addEventListener('mousedown', () => popupWindow.classList.remove('buy_popup'));