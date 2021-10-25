import { getTimeOfDay, TIME_OF_DAY } from "./background.js";

const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const timeOfDay = TIME_OF_DAY[getTimeOfDay()];
const apiKeyUnsplash = 'UdP3AfIblYXEUmXtQ9IvBp7HZ83brMOd3dvA0iFDMNo';
const settingsMenu = document.querySelector('.settings-details');

async function setBgUnsplash(tag = timeOfDay) {
    const img = new Image();
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag}&client_id=${apiKeyUnsplash}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        img.src = data.urls.regular;
        img.addEventListener('load', () => {
            body.style.backgroundImage =`url(${img.src})`;    
        });    
    } catch (error) {
        const spanError = document.createElement('p');
        spanError.textContent = 'Error: Exceeded rate limit when getting background picture from Unsplash. Please reload page and choose GitHub or Flickr. Thank you!';
        spanError.classList.add('settings-error');
        settingsMenu.append(spanError);
    } 
}

function getSlideNext(tag) {
    setBgUnsplash(tag);
}

function getSlidePrev(tag) {
    setBgUnsplash(tag);    
}

function addListenerUnsplash(tag) {
    slideNext.addEventListener('click', () => {
        getSlideNext(tag)});
    slidePrev.addEventListener('click', () => {
        getSlidePrev(tag);
    });
}

function removeListenerUnsplash() {
    slideNext.removeEventListener('click', getSlideNext);
    slidePrev.removeEventListener('click', getSlidePrev);
}

export { setBgUnsplash, addListenerUnsplash, removeListenerUnsplash };
