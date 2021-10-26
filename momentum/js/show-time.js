import { showDate } from './show-date.js';
import { showGreeting }  from './show-greeting.js';


const time = document.querySelector('.time'); 
let timer;

function showTime(language='en') {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showGreeting(language);
    showDate(language);
    timer = setTimeout(() => showTime(language), 1000);
}

export { showTime, timer };