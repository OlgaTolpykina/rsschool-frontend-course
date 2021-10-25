import { getTimeOfDay, getRandomNum, TIME_OF_DAY } from "./background.js";

const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const timeOfDay = TIME_OF_DAY[getTimeOfDay()];
const apiKeyFlickr = '301d9355edd7626d7a4e704e50c441a3';
let randomNumber = getRandomNum(0, 49);

async function setBgFlickr(tag = timeOfDay) {
    const img = new Image();
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKeyFlickr}&tags=${tag}&extras=url_l&format=json&nojsoncallback=1&per_page=50`;
    const res = await fetch(url);
    const data = await res.json();
    randomNumber = randomNumber >= data.photos.photo.length - 1 ? 0 : ++randomNumber;
    if (data.photos.photo[randomNumber]['url_l']) {
        img.src = data.photos.photo[randomNumber]['url_l'];
    } else {
        img.src = data.photos.photo[randomNumber + 1]['url_l'];
    }
    img.addEventListener('load', () => {
        body.style.backgroundImage =`url(${img.src})`;    
    });
}

function getSlideNext(tag) {
    setBgFlickr(tag);
}

function getSlidePrev(tag) {
    setBgFlickr(tag);   
}

function addListenerFlickr(tag) {
    slideNext.addEventListener('click', () => {
        getSlideNext(tag);
    });
    slidePrev.addEventListener('click', () => {
        getSlidePrev(tag);
    });
}

function removeListenerFlickr() {
    slideNext.removeEventListener('click', getSlideNext);
    slidePrev.removeEventListener('click', getSlidePrev);
}

export { setBgFlickr, addListenerFlickr, removeListenerFlickr };