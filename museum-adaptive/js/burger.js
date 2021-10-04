'use strict';

let burger = document.querySelector('.burger');
let navigationMobile = document.querySelector('.navigation_mobile');
let welcomeContent = document.querySelector('.welcome__content');
let navigationMobileLink = document.querySelector('.navigation_mobile__link');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let body = document.querySelector('body');
let footerLogo = document.querySelector('.footer__logo');
let footerNavigation = document.querySelector('.footer-navigation');
let footerBottomLine = document.querySelector('.footer__bottomline');
let footerSocials = document.querySelector('.footer-nav__socials');

burger.addEventListener('mousedown', (event) => {
    event.preventDefault();
    burger.classList.toggle('burger-popup');
    navigationMobile.classList.toggle('navigation_mobile-active');
    welcomeContent.classList.toggle('welcome__content-hidden');
    main.classList.toggle('hidden');
    body.classList.toggle('active-menu');
    footerLogo.classList.toggle('hidden');
    footerNavigation.classList.toggle('hidden');
    footerBottomLine.classList.toggle('hidden');
    footerSocials.classList.toggle('active-menu');
});

navigationMobile.addEventListener('mousedown', (event) => {
    event.preventDefault();
    burger.classList.toggle('burger-popup');
    navigationMobile.classList.toggle('navigation_mobile-active');
    welcomeContent.classList.toggle('welcome__content-hidden');
    main.classList.toggle('hidden');
    body.classList.toggle('active-menu');
    footerLogo.classList.toggle('hidden');
    footerNavigation.classList.toggle('hidden');
    footerBottomLine.classList.toggle('hidden');
    footerSocials.classList.toggle('active-menu');
});

// main.addEventListener('mousedown', (event) => {
//     event.preventDefault();
//     burger.classList.toggle('burger-popup');
//     navigationMobile.classList.toggle('navigation_mobile-active');
//     welcomeContent.classList.toggle('welcome__content-hidden');
//     main.classList.toggle('hidden');
//     body.classList.toggle('active-menu');
//     footerLogo.classList.toggle('hidden');
//     footerNavigation.classList.toggle('hidden');
//     footerBottomLine.classList.toggle('hidden');
//     footerSocials.classList.toggle('active-menu');
// });

footer.addEventListener('mousedown', (event) => {
    event.preventDefault();
    burger.classList.toggle('burger-popup');
    navigationMobile.classList.toggle('navigation_mobile-active');
    welcomeContent.classList.toggle('welcome__content-hidden');
    main.classList.toggle('hidden');
    body.classList.toggle('active-menu');
    footerLogo.classList.toggle('hidden');
    footerNavigation.classList.toggle('hidden');
    footerBottomLine.classList.toggle('hidden');
    footerSocials.classList.toggle('active-menu');
});