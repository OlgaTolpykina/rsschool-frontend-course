import { getTimeOfDay, getRandomNum, TIME_OF_DAY } from "./background.js";

const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const timeOfDay = TIME_OF_DAY[getTimeOfDay()];
const apiKeyFlickr = '301d9355edd7626d7a4e704e50c441a3';
let randomNumber = getRandomNum(0, 99);

async function setBgFlickr(tag = timeOfDay) {
    const img = new Image();
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKeyFlickr}&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    img.src = data.photos.photo[randomNumber]['url_l'];
    img.addEventListener('load', () => {
        body.style.backgroundImage =`url(${img.src})`;    
    });
}

function getSlideNext() {
    setBgFlickr();
}

function getSlidePrev() {
    setBgFlickr();   
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

export { setBgFlickr };