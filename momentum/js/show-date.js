import { DATE } from './language.js';

const day = document.querySelector('.date');

function showDate(language) {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDay = date.toLocaleDateString(DATE[language], options);
    day.textContent = currentDay;
};

export { showDate };