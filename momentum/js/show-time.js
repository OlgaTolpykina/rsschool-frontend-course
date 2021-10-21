import { showDate } from './show-date.js';
import { getTimeOfDay, showGreeting }  from './show-greeting.js';


const time = document.querySelector('.time'); 

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showGreeting();
    showDate();
    setTimeout(showTime, 1000);
}

export { showTime };