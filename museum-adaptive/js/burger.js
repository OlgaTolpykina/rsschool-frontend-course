'use strict';

let burger = document.querySelector('.burger');
let navigationMobile = document.querySelector('.navigation_mobile');
let welcomeContent = document.querySelector('.welcome__content');
let navigationMobileLink = document.querySelector('.navigation_mobile__link');
let main = document.querySelector('main');
let footer = document.querySelector('footer');

burger.addEventListener('mousedown', (event) => {
    event.preventDefault();
    burger.classList.toggle('burger-popup');
    navigationMobile.classList.toggle('navigation_mobile-active');
    welcomeContent.classList.toggle('welcome__content-hidden');
});

navigationMobile.addEventListener('mousedown', (event) => {
    event.preventDefault();
    burger.classList.toggle('burger-popup');
    navigationMobile.classList.toggle('navigation_mobile-active');
    welcomeContent.classList.toggle('welcome__content-hidden');
});

main.addEventListener('mousedown', (event) => {
    event.preventDefault();
    burger.classList.toggle('burger-popup');
    navigationMobile.classList.toggle('navigation_mobile-active');
    welcomeContent.classList.toggle('welcome__content-hidden');
});

footer.addEventListener('mousedown', (event) => {
    event.preventDefault();
    burger.classList.toggle('burger-popup');
    navigationMobile.classList.toggle('navigation_mobile-active');
    welcomeContent.classList.toggle('welcome__content-hidden');
});