import { showDate } from './show-date.js';
import { showGreeting }  from './show-greeting.js';


const time = document.querySelector('.time'); 
let timer;

function showTime(language) {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showGreeting();
    showDate(language);
    timer = setTimeout(() => showTime(language), 1000);
}

export { showTime };