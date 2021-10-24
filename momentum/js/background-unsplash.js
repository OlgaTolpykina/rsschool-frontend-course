import { getTimeOfDay, TIME_OF_DAY } from "./background.js";

const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const timeOfDay = TIME_OF_DAY[getTimeOfDay()];
const apiKeyUnsplash = 'UdP3AfIblYXEUmXtQ9IvBp7HZ83brMOd3dvA0iFDMNo';

async function setBgUnsplash(tag = timeOfDay) {
    const img = new Image();
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag}&client_id=${apiKeyUnsplash}`;
    const res = await fetch(url);
    const data = await res.json();
    img.src = data.urls.regular;
    img.addEventListener('load', () => {
        body.style.backgroundImage =`url(${img.src})`;    
    });
}

function getSlideNext() {
    setBgUnsplash();
}

function getSlidePrev() {
    setBgUnsplash();    
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

export { setBgUnsplash };
