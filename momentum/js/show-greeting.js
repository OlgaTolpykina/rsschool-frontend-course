import { GREETING } from "./language.js";
import { getTimeOfDay } from "./background.js"; 

const greeting = document.querySelector('.greeting');

function showGreeting(language) {
    const greetingText = GREETING[language][getTimeOfDay()];
    greeting.textContent = greetingText;
}

export { showGreeting }