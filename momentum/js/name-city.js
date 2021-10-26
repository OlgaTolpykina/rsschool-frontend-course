import { PLACEHOLDER, DEFAULT_CITY } from './language.js';

const name = document.querySelector('.name');
const city = document.querySelector('.city');

function setLocalStorage() {
    localStorage.setItem('name', name.value); 
    localStorage.setItem('city', city.value);   
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage(language = 'en') {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    } else {
        name.placeholder = PLACEHOLDER[language];
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } else {
        city.placeholder = DEFAULT_CITY[language];
    } 
}
// window.addEventListener('load', getLocalStorage);

export { getLocalStorage };
