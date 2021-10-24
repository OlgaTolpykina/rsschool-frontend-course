import { getWeather } from './weather.js';
import { PLACEHOLDER, DEFAULT_CITY } from './language.js';

const name = document.querySelector('.name');
const city = document.querySelector('.city');

function setLocalStorage() {
    localStorage.setItem('name', name.value); 
    localStorage.setItem('city', city.value);   
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    } else {
        name.placeholder = PLACEHOLDER['en'];
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } else {
        city.value = DEFAULT_CITY['en'];
    } 
}
window.addEventListener('load', getLocalStorage);


