import { showDate } from './show-date.js'

const time = document.querySelector('.time'); 

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}

export { showTime };