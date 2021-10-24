import { DATE } from './language.js';

const day = document.querySelector('.date');

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDay = date.toLocaleDateString(DATE['en'], options);
    day.textContent = currentDay;
};

export { showDate };