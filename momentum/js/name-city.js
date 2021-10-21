import { getWeather } from './weather.js';

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
        name.placeholder = '[Enter name]';
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } else {
        city.value = 'Minsk';
    } 
}
window.addEventListener('load', getLocalStorage);

// function setCity(event) {
//     if (event.code === 'Enter') {
//       getWeather();
//       city.blur();
//     }
// }

// city.addEventListener('keypress', setCity);


